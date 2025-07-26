import React from 'react'
import { Lock, PlayCircle, Clock, Users, Calendar, Star } from 'lucide-react'

// Mock data for demonstration
const mockCourseData = {
  course: {
    _id: "course123",
    courseTitle: "Complete Web Development Bootcamp",
    subtitle: "Learn HTML, CSS, JavaScript, React, Node.js and become a full-stack developer",
    description: "This comprehensive course covers everything you need to know to become a professional web developer. From basic HTML and CSS to advanced React concepts and backend development with Node.js. You'll build real projects and gain hands-on experience with modern development tools and practices.",
    creator: { name: "John Smith" },
    updatedAt: "2024-12-15T10:30:00Z",
    studentsEnrolled: 15420,
    coursePrice: 2999,
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
    iflow: "Bestseller Course - Join thousands of successful developers",
    purchased: false,
    lectures: [
      { _id: "1", lectureTitle: "Introduction to Web Development", isFree: true, duration: "15 min" },
      { _id: "2", lectureTitle: "HTML Fundamentals", isFree: true, duration: "25 min" },
      { _id: "3", lectureTitle: "CSS Styling and Layouts", isFree: false, duration: "35 min" },
      { _id: "4", lectureTitle: "JavaScript Basics", isFree: false, duration: "45 min" },
      { _id: "5", lectureTitle: "DOM Manipulation", isFree: false, duration: "30 min" },
      { _id: "6", lectureTitle: "React Components", isFree: false, duration: "40 min" },
      { _id: "7", lectureTitle: "State Management", isFree: false, duration: "35 min" },
      { _id: "8", lectureTitle: "API Integration", isFree: false, duration: "50 min" }
    ]
  }
};

// Mock UI Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg border shadow-sm ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 pb-2 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-sm text-gray-600 ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-2 ${className}`}>{children}</div>
);

const CardFooter = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const Separator = ({ className = "" }) => (
  <hr className={`border-gray-200 ${className}`} />
);

const Button = ({ children, className = "", onClick, ...props }) => (
  <button 
    className={`px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

const BuyCourseButton = ({ courseId }) => (
  <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-base shadow-lg">
    Enroll Now - ₹2,999
  </Button>
);

const CourseDetail = () => {
  // Mock states
  const isLoading = false;
  const isError = false;
  const data = mockCourseData;
  const refetch = () => console.log('Refetching...');
  const [showPaymentModal, setShowPaymentModal] = React.useState(false);
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);
  const [purchased, setPurchased] = React.useState(data.course.purchased || false);

  // Payment handler
  const handlePayment = (method) => {
    setPaymentSuccess(true);
    setTimeout(() => {
      setShowPaymentModal(false);
      setPaymentSuccess(false);
      setPurchased(true);
    }, 1500);
  };

  if (isLoading) return (
    <div className="mt-20 flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
  
  if (isError || !data?.course) return (
    <div className="mt-20 flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="text-red-500 text-lg font-medium">Failed to load course details</div>
        <Button onClick={refetch} className="mt-4">Try Again</Button>
      </div>
    </div>
  );

  const course = data.course;
  // Use local purchased state for UI
  const PurchasedCourse = purchased;

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative max-w-7xl mx-auto py-16 px-4 md:px-8'>
          <div className='max-w-4xl'>
            <div className='mb-4'>
              <span className='inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium'>
                Course
              </span>
            </div>
            
            <h1 className='text-3xl md:text-5xl font-bold mb-4 leading-tight'>
              {course.courseTitle}
            </h1>
            
            <p className='text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed'>
              {course.subtitle}
            </p>
            
            <div className='flex flex-wrap items-center gap-6 mb-6'>
              <div className='flex items-center gap-2'>
                <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold'>
                  {course.creator?.name?.charAt(0) || 'U'}
                </div>
                <div>
                  <p className='text-sm text-slate-400'>Created by</p>
                  <p className='text-blue-300 font-medium'>{course.creator?.name || 'Unknown'}</p>
                </div>
              </div>
              
              <div className='flex items-center gap-2 text-slate-300'>
                <Calendar size={16} />
                <span className='text-sm'>
                  Updated {course.updatedAt ? new Date(course.updatedAt).toLocaleDateString() : '-'}
                </span>
              </div>
              
              <div className='flex items-center gap-2 text-slate-300'>
                <Users size={16} />
                <span className='text-sm'>{course.studentsEnrolled || 0} students</span>
              </div>
            </div>

            {course.iflow && (
              <div className='inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg shadow-lg'>
                <div className='flex items-center gap-2'>
                  <Star className='text-yellow-300' size={20} />
                  <span className='font-semibold'>Featured:</span>
                  <span>{course.iflow}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto py-12 px-4 md:px-8'>
        <div className='grid lg:grid-cols-3 gap-12'>
          {/* Left Column - Course Info */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Description */}
            <Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
              <CardHeader className='pb-4'>
                <CardTitle className='text-2xl font-bold text-slate-800 flex items-center gap-2'>
                  Course Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-slate-600 leading-relaxed text-base'>
                  {course.description}
                </p>
              </CardContent>
            </Card>

            {/* Course Content */}
            <Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
              <CardHeader className='pb-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <CardTitle className='text-2xl font-bold text-slate-800'>
                      Course Content
                    </CardTitle>
                    <CardDescription className='text-base mt-1 flex items-center gap-2'>
                      <PlayCircle size={16} />
                      {course.lectures?.length || 0} Lectures
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='space-y-2'>
                {course.lectures && course.lectures.length > 0 ? (
                  <div className='space-y-2'>
                    {course.lectures.map((lecture, index) => (
                      <div 
                        key={lecture._id || index} 
                        className='flex items-center gap-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group border border-slate-200'
                      >
                        <div className='flex-shrink-0'>
                          <div className={`p-2 rounded-full ${
                            lecture.isFree 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-orange-100 text-orange-600'
                          }`}>
                            {lecture.isFree ? (
                              <PlayCircle size={18} />
                            ) : (
                              <Lock size={18} />
                            )}
                          </div>
                        </div>
                        <div className='flex-grow'>
                          <h3 className='font-medium text-slate-800 group-hover:text-blue-600 transition-colors'>
                            {lecture.lectureTitle}
                          </h3>
                          <div className='flex items-center gap-4 mt-1 text-sm text-slate-500'>
                            <span className='flex items-center gap-1'>
                              <Clock size={12} />
                              {lecture.duration || '10 min'}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              lecture.isFree 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-orange-100 text-orange-700'
                            }`}>
                              {lecture.isFree ? 'Free Preview' : 'Premium'}
                            </span>
                          </div>
                        </div>
                        <div className='text-slate-400 text-sm'>
                          Lecture {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='text-center py-12 text-slate-400'>
                    <PlayCircle size={48} className='mx-auto mb-4 opacity-30' />
                    <p className='text-lg'>No lectures available yet</p>
                    <p className='text-sm'>Check back soon for course content</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Purchase Card */}
          <div className='lg:col-span-1'>
            <div className='sticky top-24'>
              <Card className='shadow-2xl border-0 bg-white overflow-hidden'>
                <div className='relative'>
                  <div className='aspect-video bg-gradient-to-br from-slate-800 to-blue-900 flex items-center justify-center'>
                    {course.thumbnail ? (
                      <img 
                        src={course.thumbnail} 
                        alt="Course Thumbnail" 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className='text-center text-white'>
                        <PlayCircle size={64} className='mx-auto mb-2 opacity-80' />
                        <p className='text-sm opacity-80'>Preview Coming Soon</p>
                      </div>
                    )}
                  </div>
                  {PurchasedCourse && (
                    <div className='absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
                      Enrolled
                    </div>
                  )}
                </div>
                
                <CardContent className='p-6'>
                  <div className='mb-6'>
                    <h3 className='font-semibold text-slate-800 mb-2'>
                      {course.lectures && course.lectures[0]?.lectureTitle ? 
                        course.lectures[0].lectureTitle : 
                        'Start Your Learning Journey'
                      }
                    </h3>
                    <Separator className='my-4'/>
                    <div className='flex items-baseline gap-2'>
                      <span className='text-3xl font-bold text-slate-800'>
                        ₹{course.coursePrice}
                      </span>
                      <span className='text-sm text-slate-500 line-through'>
                        ₹{Math.round(course.coursePrice * 1.5)}
                      </span>
                      <span className='bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium'>
                        33% OFF
                      </span>
                    </div>
                  </div>

                  <div className='space-y-3 mb-6 text-sm text-slate-600'>
                    <div className='flex items-center gap-2'>
                      <PlayCircle size={16} className='text-blue-500' />
                      <span>{course.lectures?.length || 0} lectures</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Clock size={16} className='text-blue-500' />
                      <span>Lifetime access</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Users size={16} className='text-blue-500' />
                      <span>Join {course.studentsEnrolled || 0} students</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className='p-6 pt-0'>
                  {PurchasedCourse ? (
                    <Button className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold text-base shadow-lg">
                      Continue Learning
                    </Button>
                  ) : (
                    <BuyCourseButton onClick={() => setShowPaymentModal(true)} />
                  )}
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail