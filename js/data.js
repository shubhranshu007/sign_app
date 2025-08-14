/ Sample video data for InTube
const videos = [
    {
        id: 1,
        title: "JavaScript Tutorial for Beginners - Complete Course 2024",
        channel: "CodeMaster Pro",
        channelId: "codemaster",
        views: "2.1M views",
        time: "3 days ago",
        duration: "2:45:30",
        thumbnail: "linear-gradient(45deg, #667eea, #764ba2)",
        category: "Education",
        description: "Learn JavaScript from scratch with this comprehensive tutorial covering all the basics and advanced concepts."
    },
    {
        id: 2,
        title: "React Hooks Explained - useState, useEffect & Custom Hooks",
        channel: "WebDev Pro",
        channelId: "webdevpro",
        views: "856K views",
        time: "1 week ago",
        duration: "45:12",
        thumbnail: "linear-gradient(45deg, #f093fb, #f5576c)",
        category: "Technology",
        description: "Master React Hooks with practical examples and real-world applications."
    },
    {
        id: 3,
        title: "CSS Grid vs Flexbox - When to Use Each Layout Method",
        channel: "Design Guru",
        channelId: "designguru",
        views: "432K views",
        time: "2 weeks ago",
        duration: "28:45",
        thumbnail: "linear-gradient(45deg, #4facfe, #00f2fe)",
        category: "Education",
        description: "Understanding the differences between CSS Grid and Flexbox for modern web layouts."
    },
    {
        id: 4,
        title: "Node.js Crash Course - Build a REST API from Scratch",
        channel: "Backend Basics",
        channelId: "backendbasics",
        views: "1.3M views",
        time: "5 days ago",
        duration: "1:32:18",
        thumbnail: "linear-gradient(45deg, #43e97b, #38f9d7)",
        category: "Technology",
        description: "Complete guide to building RESTful APIs with Node.js and Express."
    },
    {
        id: 5,
        title: "Python Machine Learning Tutorial - Beginner to Advanced",
        channel: "AI Academy",
        channelId: "aiacademy",
        views: "967K views",
        time: "1 day ago",
        duration: "3:15:42",
        thumbnail: "linear-gradient(45deg, #fa709a, #fee140)",
        category: "Education",
        description: "Comprehensive machine learning course using Python and popular libraries."
    },
    {
        id: 6,
        title: "Docker for Developers - Complete Containerization Guide",
        channel: "DevOps Daily",
        channelId: "devopsdaily",
        views: "654K views",
        time: "4 days ago",
        duration: "2:08:33",
        thumbnail: "linear-gradient(45deg, #a8edea, #fed6e3)",
        category: "Technology",
        description: "Learn Docker containerization for modern application deployment."
    },
    {
        id: 7,
        title: "Vue.js 3 Composition API - Modern Frontend Development",
        channel: "Frontend Focus",
        channelId: "frontendfocus",
        views: "389K views",
        time: "1 week ago",
        duration: "1:45:20",
        thumbnail: "linear-gradient(45deg, #d299c2, #fef9d7)",
        category: "Technology",
        description: "Explore Vue.js 3 Composition API for building reactive applications."
    },
    {
        id: 8,
        title: "Database Design Fundamentals - SQL and NoSQL",
        channel: "Data Science Hub",
        channelId: "datasciencehub",
        views: "723K views",
        time: "3 days ago",
        duration: "56:14",
        thumbnail: "linear-gradient(45deg, #89f7fe, #66a6ff)",
        category: "Education",
        description: "Master database design principles for both SQL and NoSQL databases."
    },
    {
        id: 9,
        title: "TypeScript for JavaScript Developers - Complete Guide",
        channel: "Code Evolution",
        channelId: "codeevolution",
        views: "1.1M views",
        time: "2 days ago",
        duration: "2:22:45",
        thumbnail: "linear-gradient(45deg, #fdbb2d, #22c1c3)",
        category: "Technology",
        description: "Transition from JavaScript to TypeScript with this comprehensive guide."
    },
    {
        id: 10,
        title: "AWS Cloud Computing Basics - Getting Started Guide",
        channel: "Cloud Masters",
        channelId: "cloudmasters",
        views: "892K views",
        time: "6 days ago",
        duration: "1:38:52",
        thumbnail: "linear-gradient(45deg, #ee9ca7, #ffdde1)",
        category: "Technology",
        description: "Introduction to Amazon Web Services and cloud computing concepts."
    },
    {
        id: 11,
        title: "GraphQL API Development - Modern Data Fetching",
        channel: "API Experts",
        channelId: "apiexperts",
        views: "445K views",
        time: "1 week ago",
        duration: "1:12:30",
        thumbnail: "linear-gradient(45deg, #667eea, #764ba2)",
        category: "Technology",
        description: "Build efficient APIs with GraphQL for modern web applications."
    },
    {
        id: 12,
        title: "Mobile App Development with React Native",
        channel: "Mobile Dev",
        channelId: "mobiledev",
        views: "1.5M views",
        time: "4 days ago",
        duration: "3:45:18",
        thumbnail: "linear-gradient(45deg, #f093fb, #f5576c)",
        category: "Technology",
        description: "Create cross-platform mobile apps using React Native framework."
    }
];

// Search suggestions data
const searchSuggestions = [
    "javascript tutorial",
    "react hooks",
    "web development",
    "css animations",
    "node.js course",
    "python basics",
    "html5 features",
    "responsive design",
    "vue.js tutorial",
    "typescript guide",
    "docker containers",
    "aws cloud",
    "machine learning",
    "database design",
    "api development",
    "mobile apps"
];

// Categories data
const categories = [
    { name: "All", active: true },
    { name: "Music", active: false },
    { name: "Gaming", active: false },
    { name: "News", active: false },
    { name: "Sports", active: false },
    { name: "Technology", active: false },
    { name: "Education", active: false },
    { name: "Comedy", active: false },
    { name: "Entertainment", active: false },
    { name: "Science", active: false }
];

// Channel data
const channels = [
    {
        id: "codemaster",
        name: "CodeMaster Pro",
        subscribers: "2.1M",
        avatar: "C",
        color: "#FF6B6B"
    },
    {
        id: "webdevpro",
        name: "WebDev Pro",
        subscribers: "856K",
        avatar: "W",
        color: "#4ECDC4"
    },
    {
        id: "designguru",
        name: "Design Guru",
        subscribers: "432K",
        avatar: "D",
        color: "#45B7D1"
    }
];

// Export data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { videos, searchSuggestions, categories, channels };
}