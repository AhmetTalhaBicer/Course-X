const courses = [
  {
    id: 1,
    title: "C++",
    description:
      "This course covers the fundamentals of C++ programming. C++ is a general-purpose programming language widely used in software development.",
    price: 59.99,
    image: "./images/c+.png",
    category:"Programming Language",
  },
  {
    id: 2,
    title: "Java",
    description:
      'Java is a general-purpose programming language known for its "write once, run anywhere" capability. It\'s used to develop a wide range of applications, including web, mobile, and desktop.',
    price: 59.99,
    image: "./images/java.png",
    category:"Programming Language",
  },
  {
    id: 3,
    title: "Python",
    description:
      "Python is a simple yet powerful programming language. It's favored in data analysis, artificial intelligence, web development, and more due to its readability and versatility.",
    price: 59.99,
    image: "./images/python.png",
    category:"Programming Language",
  },
  {
    id: 4,
    title: "JavaScript",
    description:
      "JavaScript is a programming language used to make web applications interactive. It enables you to create dynamic and responsive web pages that can react to user interactions.",
    price: 59.99,
    image: "./images/js.png",
    category:"Programming Language",
  },
  {
    id: 5,
    title: "C#",
    description:
      "C# is a general-purpose programming language developed by Microsoft. It's used to build a variety of applications, including games, mobile apps, and enterprise software.",
    price: 59.99,
    image: "./images/csharp.png",
    category:"Programming Language",
  },
  {
    id: 6,
    title: "Ruby",
    description:
      "Ruby is a dynamic, object-oriented programming language used for web development and building interactive websites. It's known for its simplicity and productivity.",
    price: 59.99,
    image: "./images/ruby.png",
    category:"Programming Language",
  },
  {
    id: 7,
    title: "Go Programming Basics",
    description:
      "Get started with the Go programming language known for its simplicity and efficiency.",
    price: 39.99,
    image: "./images/go.png",
    category:"Programming Language",
  },
  {
    id: 8,
    title: "C",
    description:
      "C is a general-purpose programming language known for its efficiency, flexibility, and portability. It's used to develop a wide range of applications, including operating systems, databases, and more.",
    price: 59.99,
    image: "./images/c.png",
    category:"Programming Language",
  },
  {
    id: 9,
    title: "HTML",
    description:
      "HTML is the fundamental language for creating web pages. It structures the basic elements of a web page, such as text, images, links, and more.",
    price: 29.99,
    image: "./images/html.png",
    category: "Web Development",
  },
  {
    id: 10,
    title: "CSS",
    description:
      "CSS, short for Cascading Style Sheets, is the language used for designing and styling web pages. It allows you to control the visual presentation of web content, including colors, fonts, layouts, and animations.",
    price: 29.99,
    image: "./images/css.png",
    category: "Web Development",
  },
  {
    id: 11,
    title: "React",
    description:
      "React is used to build web applications with a modern and fast JavaScript library. It offers a component-based approach, making it easy to develop reusable components for your projects.",
    price: 59.99,
    image: "./images/react.png",
    category: "Web Development",
  },
  {
    id: 12,
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a fast and customizable CSS framework for websites. It allows you to quickly build responsive and well-designed web layouts using utility classes.",
    price: 29.99,
    image: "./images/tailwind.png",
    category: "Web Development",
  },
  {
    id: 13,
    title: "Angular",
    description:
      "Angular is a web application framework developed by Google. It is ideal for building large-scale and complex web projects with a structured architecture.",
    price: 49.99,
    image: "./images/angular.png",
    category: "Web Development",
  },
  {
    id: 14,
    title: "Vue.js",
    description:
      "Vue.js is a fast and flexible JavaScript framework for building web applications. It follows a component-based structure and is highly customizable.",
    price: 49.99,
    image: "./images/vue.png",
    category: "Web Development",
  },
  {
    id: 15,
    title: "Node.js",
    description:
      "Node.js is a platform for building fast and scalable server-side applications. It allows you to run JavaScript on the server side, making it suitable for real-time applications.",
    price: 59.99,
    image: "./images/nodejs.png",
    category: "Web Development",
  },
  {
    id: 16,
    title: "Django",
    description:
      "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. It follows the model-template-views architectural pattern.",
    price: 39.99,
    image: "./images/django.png",
    category: "Web Development",
  },
  {
    id: 17,
    title: "Mobile App Development with Swift",
    description:
      "Learn iOS app development using Swift and build your own mobile apps.",
    price: 49.99,
    image: "./images/swift.png",
    category: "Mobile Development",
  },
  {
    id: 18,
    title: "Mastering Kotlin for Android",
    description:
      "Master Kotlin for Android app development and become an Android developer expert.",
    price: 49.99,
    image: "./images/kotlin.png",
    category: "Mobile Development",
  },
  {
    id: 19,
    title: "Flutter Mobile App Development",
    description: "Develop cross-platform mobile apps with Flutter and Dart.",
    price: 59.99,
    image: "./images/flutter.png",
    category: "Mobile Development",
  },
  {
    id: 20,
    title: "React Native Mobile App Development",
    description:
      "Create mobile apps for iOS and Android using React Native and JavaScript.",
    price: 59.99,
    image: "./images/react-native.png",
    category: "Mobile Development",
  },
  {
    id: 21,
    title: "Advanced Mobile UI Design",
    description:
      "Design beautiful and user-friendly mobile app interfaces with best practices.",
    price: 39.99,
    image: "./images/mobileuı.png",
    category: "Mobile Development",
  },
  {
    id: 22,
    title: "Mobile App Security and Testing",
    description:
      "Ensure the security of your mobile apps and learn testing strategies.",
    price: 49.99,
    image: "./images/mobile-security.png",
    category: "Mobile Development",
  },
  {
    id: 23,
    title: "Introduction to Data Science with Python",
    description:
      "Get started with data science using Python and learn data analysis and visualization.",
    price: 49.99,
    image: "./images/python-datascience.jpg ",
    category: "Data Science",
  },
  {
    id: 24,
    title: "Machine Learning Fundamentals",
    description:
      "Learn the basics of machine learning and its applications in data science.",
    price: 59.99,
    image: "./images/machine learning.png",
    category: "Data Science",
  },
  {
    id: 25,
    title: "Data Analysis with R",
    description:
      "Master data analysis using the R programming language for data science tasks.",
    price: 49.99,
    image: "./images/r.png",
    category: "Data Science",
  },
  {
    id: 26,
    title: "Big Data Analytics with Hadoop",
    description:
      "Explore big data analytics and processing with Hadoop and related technologies.",
    price: 69.99,
    image: "./images/Hadoop.png",
    category: "Data Science",
  },
  {
    id: 27,
    title: "Deep Learning and Neural Networks",
    description:
      "Dive into deep learning and neural networks for advanced data science applications.",
    price: 69.99,
    image: "./images/deep-learning.png",
    category: "Data Science",
  },
  {
    id: 28,
    title: "Data Visualization with Tableau",
    description:
      "Learn data visualization techniques using Tableau for effective data communication.",
    price: 39.99,
    image: "./images/tableau.png",
    category: "Data Science",
  },
  {
    id: 29,
    title: "Natural Language Processing (NLP)",
    description:
      "Explore natural language processing for text data analysis and language understanding.",
    price: 59.99,
    image: "./images/nlp-datascience.jpg",
    category: "Data Science",
  },
  {
    id: 30,
    title: 'Introduction to SQL',
    description: 'Master SQL, the language for managing and querying relational databases.',
    price: 39.99,
    image: './images/sql.png',
    category:  "Database",
  },
  {
    id: 31,
    title: 'MongoDB Essentials',
    description: 'Learn MongoDB, a popular NoSQL database for building scalable and flexible applications.',
    price: 49.99,
    image: './images/mongodb.png',
    category:  "Database",
  },
  {
    id: 32,
    title: 'MySQL Fundamentals',
    description: 'Learn MySQL, a popular open-source relational database management system.',
    price: 49.99,
    image: './images/mysql.png',
    category:  "Database",
  },
  {
    id: 33,
    title: 'Oracle Database Administration',
    description: 'Learn Oracle Database administration and management to build and maintain databases.',
    price: 59.99,
    image: './images/oracle.png',
    category:  "Database",
  },
  {
    id: 34,
    title: 'SQL Server Administration',
    description: 'Learn SQL Server administration and management to build and maintain databases.',
    price: 59.99,
    image: './images/sql-server.png',
    category:  "Database",
  },
  {
    id: 35,
    title: 'Database Security',
    description: 'Understand database security measures to protect sensitive data and prevent breaches.',
    price: 49.99,
    image: './images/database-security.png',
    category:  "Database",
  },
  {
    id: 36,
    title: 'Introduction to Cloud Computing',
    description: 'Learn the fundamentals of cloud computing and its applications in business and IT.',
    price: 29.99,
    image: './images/cloud-computing.png',
    category:"Cloud Computing",
  },
  {
    id: 37,
    title: 'Cloud Computing with AWS',
    description: 'Learn Amazon Web Services (AWS) to build and manage cloud solutions for businesses.',
    price: 49.99,
    image: './images/aws.png',
    category:"Cloud Computing",
  },
  {
    id: 38,
    title: 'Cloud Computing with Azure',
    description: 'Learn Microsoft Azure to build and manage cloud solutions for businesses.',
    price: 49.99,
    image: './images/azure.png',
    category:"Cloud Computing",
  },
  {
    id: 39,
    title: 'Cloud Computing with Google Cloud',
    description: 'Learn Google Cloud Platform (GCP) to build and manage cloud solutions for businesses.',
    price: 49.99,
    image: './images/gcp.png',
    category:"Cloud Computing",
  },
  {
    id: 40,
    title: 'Introduction to Game Development',
    description: 'Get started with game development and learn the fundamentals of game design and programming.',
    price: 49.99,
    image: './images/game-dev.jpg',
    category: "Game Development",
  },
  {
    id: 41,
    title: 'Unity Game Development',
    description: 'Master Unity, one of the most popular game development platforms, and create your own games.',
    price: 59.99,
    image: './images/unity-game.png',
    category: "Game Development",
  },
  {
    id: 42,
    title: 'Unreal Engine Game Design',
    description: 'Learn how to design and develop games using the powerful Unreal Engine game engine.',
    price: 59.99,
    image: './images/unreal-engine.png',
    category: "Game Development",
  },
  {
    id: 43,
    title: '2D Game Development with Godot',
    description: 'Explore 2D game development with Godot, an open-source game engine for indie developers.',
    price: 49.99,
    image: './images/godot.png',
    category: "Game Development",
  },
  {
    id: 44,
    title: 'Game Design and Storytelling',
    description: 'Master the art of game design and storytelling to create engaging and immersive game experiences.',
    price: 49.99,
    image: './images/game-design.jpg',
    category: "Game Development",
  },

];

export default courses;
