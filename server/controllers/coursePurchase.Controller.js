// Stripe removed for mock payment
import { Course } from "../models/course.model.js";
import { CoursePurchase } from "../models/coursePurchase.model.js";

// Stripe instance removed

export const createCheckoutSession = async (req, res) => {
    try {
        const userId = req.id;
        const { courseId, cardNumber, expiry, cvv } = req.body;

        // Basic validation (no real payment processing)
        if (!cardNumber || !expiry || !cvv) {
            return res.status(400).json({ message: "Incomplete payment details", success: false });
        }
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            return res.status(400).json({ message: "Invalid card number", success: false });
        }
        if (cvv.length !== 3 || isNaN(cvv)) {
            return res.status(400).json({ message: "Invalid CVV", success: false });
        }
        // Optionally, check expiry format MM/YY
        if (!/^\d{2}\/\d{2}$/.test(expiry)) {
            return res.status(400).json({ message: "Invalid expiry format. Use MM/YY", success: false });
        }

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        // Create a new course purchase record
        const newPurchase = new CoursePurchase({
            courseId,
            userId,
            amount: course.coursePrice,
            status: "completed",
            paymentId: `MOCK-${Date.now()}`
        });
        await newPurchase.save();
        return res.status(200).json({ message: "Payment successful! Course purchased.", success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}