import Stripe from "stripe";
import { Course } from "../models/course.model.js";
import { CoursePurchase } from "../models/coursePurchase.model.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req,res) => {
    try{
        const userId = req.id;
        const {courseId} = req.body;

        const course = await Course.findById(courseId);
        if(!course){
            return res.status(404).json({message:"Course not found"});
        }
        // create a new course purchase record
        const newPurchase = new CoursePurchase({
            courseId,
            userId,
            amount:course.coursePrice,
            status:"pending"
        })
        // create a stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            line_items:[{
                price_data:{
                    currency:"inr",
                    product_data:{
                        name:course.courseTitle,
                        images:[course.courseThumbnail],
                    },
                    unit_amount:course.coursePrice * 100,
                },
                quantity:1
            }],
            mode:"payment",
            success_url:`http://localhost:3000/course-detail/${courseId}`,
            cancel_url:`http://localhost:3000/course-detail/${courseId}`,
            metadata:{
                courseId : courseId,
                userId : userId,
            },
            shipping_address_collection:{
                allowed_countries:["IN"]
            },
            
        });


    }catch(error){
        console.log(error);
        
    }
}