"use client";
import { useState } from "react";
import { FaReact, FaRocket, FaListAlt, FaPalette, FaLayerGroup, FaCodeBranch, FaDatabase, FaTimes } from "react-icons/fa";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

type BlogItem = {
  icon: JSX.Element;
  title: string;
  description: string;
  content: string;
  category: string;
};

const categories = ["All", "Next.js", "React", "Redux", "UI"];

const blogItems = [
  {
    icon: <FaReact className="text-3xl text-blue-500 dark:text-blue-300" />,
    title: "Getting Started with Next.js",
    description: "A beginner-friendly guide to building your first app using Next.js.",
    content: `**Getting Started with Next.js**

**Introduction**

Next.js is a powerful React framework that simplifies building full-stack web applications. It offers features like server-side rendering (SSR), static site generation (SSG), and built-in routing, making it a go-to choice for developers in 2025. Whether you're creating a personal blog or a complex web app, Next.js provides a robust foundation. This guide will walk you through setting up your first Next.js project, perfect for beginners looking to dive into modern web development.

**System Requirements**

Before starting, ensure you have:
- Node.js version 18.18 or later installed. Download it from [nodejs.org](https://nodejs.org/).
- A supported operating system: macOS, Windows (including WSL), or Linux.

**Automatic Installation**

The easiest way to start is with the \`create-next-app\` CLI tool. Run this command in your terminal:

\`\`\`bash
npx create-next-app@latest
\`\`\`

You'll be prompted to configure your project:
1. Name your project (e.g., \`my-app\`).
2. Choose TypeScript for type safety (recommended).
3. Enable ESLint for code linting.
4. Optionally include Tailwind CSS for styling.
5. Decide if you want a \`src/\` directory.
6. Select the App Router (recommended for new projects).
7. Customize the import alias (default: \`@/*\`).

After setup, navigate to your project folder and start the development server:

\`\`\`bash
cd my-app
npm run dev
\`\`\`

Visit [http://localhost:3000](http://localhost:3000) in your browser to see your app.

**Manual Installation**

For more control, set up Next.js manually:
1. Create a new directory and initialize a Node.js project:
   \`\`\`bash
   mkdir my-app
   cd my-app
   npm init -y
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install next@latest react@latest react-dom@latest
   \`\`\`
3. Add scripts to \`package.json\`:
   \`\`\`json
   "scripts": {
     "dev": "next dev",
     "build": "next build",
     "start": "next start",
     "lint": "next lint"
   }
   \`\`\`
4. Create an \`app\` directory with a root layout (\`app/layout.tsx\`):
   \`\`\`tsx
   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en">
         <body>{children}</body>
       </html>
     );
   }
   \`\`\`
5. Add a home page (\`app/page.tsx\`):
   \`\`\`tsx
   export default function Page() {
     return <h1>Hello, Next.js!</h1>;
   }
   \`\`\`
6. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

**Setting Up TypeScript**

If you opt for TypeScript, Next.js auto-configures a \`tsconfig.json\` file. For manual setup, install TypeScript (\`npm install typescript @types/react @types/node\`) and rename files to \`.tsx\`. Run \`next dev\` to finalize the setup.

**Setting Up ESLint**

ESLint is included by default. For manual setup, add \`"lint": "next lint"\` to your \`package.json\` and run \`npm run lint\` to configure it.

**Conclusion**

Next.js makes it easy to start building modern web applications with minimal setup. Whether you use the automatic CLI or manual configuration, you’ll have a solid foundation for creating fast, scalable apps. Explore further features like routing and data fetching to unlock Next.js’s full potential.

**Resource**: [Next.js Documentation - Getting Started](https://nextjs.org/docs/app/getting-started/installation)`,
    category: "Next.js"
  },
  {
    icon: <FaRocket className="text-3xl text-green-500 dark:text-green-300" />,
    title: "Advanced Features in Next.js",
    description: "Explore incremental static regeneration, API routes, and image optimization.",
    content: `**Advanced Features in Next.js**

**Introduction**

Next.js is a powerhouse for building modern web applications, offering advanced features that boost performance and developer productivity. In 2025, features like Incremental Static Regeneration (ISR), API Routes, and Image Optimization are essential for creating scalable, fast, and SEO-friendly apps. This post dives into these advanced features, showing you how to leverage them in your projects.

**Hybrid Rendering**

Next.js supports both Server-Side Rendering (SSR) and Static Site Generation (SSG). Hybrid rendering lets you mix these approaches, choosing the best method per page. For dynamic data, SSR fetches fresh content on each request, while SSG pre-renders pages at build time for speed. Use \`getServerSideProps\` for SSR and \`getStaticProps\` for SSG.

**Incremental Static Regeneration (ISR)**

ISR allows static pages to update without rebuilding the entire site, perfect for frequently changing content like blog posts. Add the \`revalidate\` option to \`getStaticProps\`:

\`\`\`javascript
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 60, // Update every 60 seconds
  };
}
\`\`\`

**Server Components**

Server Components, introduced in recent Next.js versions, render on the server, reducing client-side JavaScript. This improves load times and keeps sensitive logic server-side. Example:

\`\`\`javascript
// app/components/ServerComponent.js
export default async function ServerComponent() {
  const data = await fetchData();
  return <div>{data}</div>;
}
\`\`\`

**API Routes**

API Routes let you build backend APIs within your Next.js app, streamlining development. Create a route in \`pages/api\`:

\`\`\`javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js!' });
}
\`\`\`

**Image Optimization**

The Next.js \`Image\` component optimizes images automatically, supporting modern formats like WebP. Example:

\`\`\`javascript
function MyComponent() {
  return <Image src="/image.jpg" alt="Description" width={500} height={300} />;
}
\`\`\`

**Conclusion**

Next.js’s advanced features like hybrid rendering, ISR, Server Components, API Routes, and Image Optimization empower developers to build high-performance apps. Experiment with these in your next project to see their impact.

**Resource**: [Top 5 Next.js Features You Need to Know in 2025](https://medium.com/@rwchampin/top-5-next-js-features-you-need-to-know-in-2025-acb3a44825c3)`,
    category: "Next.js"
  },
  {
    icon: <FaListAlt className="text-3xl text-purple-500 dark:text-purple-300" />,
    title: "State Management with Redux Toolkit",
    description: "Modern Redux with createSlice and configureStore in your React apps.",
    content: `**State Management with Redux Toolkit**

**Introduction**

Managing state in complex React applications can be challenging, especially when data needs to be shared across components. Redux Toolkit simplifies Redux, making it easier to manage global state with less boilerplate. In this post, we’ll explore how to use Redux Toolkit’s \`createSlice\` and \`configureStore\` in your React apps.

**Setting Up Redux Toolkit**

Install Redux Toolkit and React-Redux:

\`\`\`bash
npm install @reduxjs/toolkit react-redux
\`\`\`

Create a store in a file like \`store.js\`:

\`\`\`javascript

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
\`\`\`

**Using createSlice**

\`createSlice\` combines reducers and actions into a single definition. Create a counter slice:

\`\`\`javascript

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
\`\`\`

**Integrating with React**

Wrap your app with the Redux Provider in your main app file:

\`\`\`javascript

function App() {
  return (
    <Provider store={store}>
      {/* Your app components */}
    </Provider>
  );
}
export default App;
\`\`\`

Use \`useSelector\` and \`useDispatch\` in components to access and update state:

\`\`\`javascript

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
\`\`\`

**Conclusion**

Redux Toolkit streamlines state management with tools like \`createSlice\` and \`configureStore\`. It’s ideal for managing complex state in React apps, offering a cleaner and more efficient approach than traditional Redux.

**Resource**: [Redux Toolkit Documentation](https://redux-toolkit.js.org/)`,
    category: "Redux"
  },
  {
    icon: <FaPalette className="text-3xl text-pink-500 dark:text-pink-300" />,
    title: "Designing UI Systems with TailwindCSS",
    description: "Create consistent and scalable UI with utility-first classes.",
    content: `**Designing UI Systems with TailwindCSS**

**Introduction**

TailwindCSS is a utility-first CSS framework that revolutionizes UI development by providing low-level utility classes. These classes allow you to build custom, consistent, and scalable user interfaces directly in your markup. In this post, we’ll explore how to use TailwindCSS to create a robust UI system for your React or Next.js projects.

**Setting Up TailwindCSS**

Install TailwindCSS in your project:

\`\`\`bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

This creates a \`tailwind.config.js\` and a \`postcss.config.js\` file.

**Configuring TailwindCSS**

Update \`tailwind.config.js\` to specify where Tailwind should look for classes:

\`\`\`javascript
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
\`\`\`

Add Tailwind’s directives to your CSS file (e.g., \`styles/global.css\`):

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

**Using Utility Classes**

Tailwind’s utility classes let you style elements directly in your JSX. For example, create a styled section:

\`\`\`jsx
<div className="flex items-center justify-between p-4 bg-blue-500 text-white">
  <h1 className="text-2xl font-bold">Welcome to Tailwind</h1>
  <button className="px-4 py-2 bg-white text-blue-500 rounded">Click Me</button>
</div>
\`\`\`

**Building Reusable Components**

Create reusable components with Tailwind classes. For example, a card component:

\`\`\`jsx
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Sunset Vibes</div>
    <p className="text-gray-700 text-base">
      A beautiful sunset over the mountains, captured in vivid detail.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nature</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sunset</span>
  </div>
</div>
\`\`\`

**Conclusion**

TailwindCSS enables rapid development of consistent and scalable UI systems. Its utility-first approach reduces CSS bloat and makes styling intuitive. Integrate it into your React or Next.js projects for a streamlined design process.

**Resource**: [TailwindCSS Documentation](https://tailwindcss.com/docs)`,
    category: "UI"
  },
  {
    icon: <FaLayerGroup className="text-3xl text-yellow-500 dark:text-yellow-300" />,
    title: "Optimizing React Apps for Performance",
    description: "Tips and tools to make your React applications blazingly fast.",
    content: `**Optimizing React Apps for Performance**

**Introduction**

Performance is key to delivering a great user experience in React applications. Slow apps can frustrate users and hurt engagement. In this post, we’ll cover practical techniques and tools to optimize your React apps, ensuring they run smoothly and efficiently.

**1. Use React.memo**

\`React.memo\` prevents unnecessary re-renders of functional components by memoizing them:

\`\`\`javascript
const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.data}</div>;
});
\`\`\`

**2. Lazy Loading**

Lazy load components with \`React.lazy\` and \`Suspense\` to reduce initial load times:

\`\`\`javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

**3. Code Splitting**

Split your code into smaller chunks to load only what’s needed. Next.js handles page-level code splitting automatically, but you can also split components manually.

**4. Optimize Images**

In Next.js, use the \`Image\` component for automatic image optimization:

\`\`\`javascript
function MyComponent() {
  return <Image src="/image.jpg" alt="Description" width={500} height={300} />;
}
\`\`\`

**5. Use React Profiler**

The React Profiler helps identify performance bottlenecks by analyzing component render times. Enable it in your app to pinpoint slow components.

**Conclusion**

Optimizing React apps involves techniques like memoization, lazy loading, code splitting, and image optimization. Tools like React Profiler and Next.js’s built-in features make it easier to achieve blazing-fast performance.

**Resource**: [Optimizing React Performance](https://react.dev/learn/optimizing-performance)`,
    category: "React"
  },
  {
    icon: <FaCodeBranch className="text-3xl text-red-500 dark:text-red-300" />,
    title: "Folder Structure in Modern React Projects",
    description: "Best practices for organizing your code for scalability.",
    content: `**Folder Structure in Modern React Projects**

**Introduction**

A well-organized folder structure is essential for maintaining scalability and readability in React projects. As your app grows, a clear structure helps teams collaborate and maintain code. This post outlines best practices for organizing your React project folders.

**1. Feature-Based Structure**

Organize code by features or pages to group related files:

- \`src/\`
  - \`components/\`
    - \`Header.js\`
    - \`Footer.js\`
  - \`pages/\`
    - \`Home.js\`
    - \`About.js\`
  - \`styles/\`
    - \`global.css\`
  - \`utils/\`
    - \`api.js\`

This structure keeps related logic together, making it easier to navigate.

**2. Use src Directory**

Place all source code in a \`src/\` directory to separate it from configuration files like \`package.json\` or \`.eslintrc\`.

**3. Separate Concerns**

Divide your code into folders based on concerns:
- \`components/\`: Reusable UI components.
- \`pages/\`: Page-specific components (used in Next.js).
- \`styles/\`: CSS or Tailwind files.
- \`utils/\`: Helper functions and API logic.

**Conclusion**

A thoughtful folder structure enhances maintainability and scalability. Adopt a feature-based approach and separate concerns to keep your React project organized.

**Resource**: [React Folder Structure](https://medium.com/@pshrmn/a-beginners-guide-to-react-project-structure-1ff9dc39d65)`,
    category: "React"
  },
  {
    icon: <FaDatabase className="text-3xl text-gray-500 dark:text-gray-300" />,
    title: "Connecting Redux with REST APIs",
    description: "Use createAsyncThunk to fetch and manage data from APIs.",
    content: `**Connecting Redux with REST APIs**

**Introduction**

Fetching data from REST APIs is a common task in React applications. Redux Toolkit’s \`createAsyncThunk\` simplifies asynchronous data fetching and state management. In this post, we’ll learn how to connect Redux with REST APIs using \`createAsyncThunk\`.

**Setting Up createAsyncThunk**

Define an async thunk to fetch data:

\`\`\`javascript

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});
\`\`\`

**Handling Async States**

In your slice, manage the pending, fulfilled, and rejected states:

\`\`\`javascript

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
\`\`\`

**Dispatching the Thunk**

Dispatch the thunk in a component:

\`\`\`javascript

function PostsList() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

**Conclusion**

\`createAsyncThunk\` makes it easy to fetch and manage API data in Redux, handling loading states and errors efficiently. Integrate it into your React apps for robust data management.

**Resource**: [Redux Toolkit Documentation - createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)`,
    category: "Redux"
  },
];

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  const filteredBlogs =
    selectedCategory === "All"
      ? blogItems
      : blogItems.filter((item) => item.category === selectedCategory);

  const handleClickOpen = (blog: BlogItem) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  return (
    <section id="blogs" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Blog Posts"
          title="Explore My Technical Blogs"
          description="Insights, tutorials, and ideas based on my journey as a full-stack developer."
        />

        {/* Categories */}
        <div className="flex gap-4 flex-wrap justify-center mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 border rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((item, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 h-full hover:-translate-y-1 hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => handleClickOpen(item)}
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full">
                  {item.icon}
                </div>
                <div className="font-semibold text-lg text-gray-900 dark:text-white">
                  {item.title}
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-white/70">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Dialog */}
        {selectedBlog && (
          <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
            <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
                {selectedBlog.title}
              </DialogTitle>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <DialogContent className="p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{
                  __html: selectedBlog.content
                    .replace(/```(\w+)?\n([\s\S]+?)```/g, (match, lang, code) => {
                      return `<pre class="bg-gray-200 dark:bg-gray-700 text-sm p-4 rounded-lg overflow-x-auto my-4 border border-gray-300 dark:border-gray-600"><code>${code.trim()}</code></pre>`;
                    })
                    .replace(/\n/g, "<br>")
                    .replace(/^\*\*(.+?)\*\*$/gm, "<strong>$1</strong>")
                    .replace(
                      /\[([^\]]+)\]\(([^)]+)\)/g,
                      '<a href="$2" class="text-blue-500 dark:text-blue-300 hover:underline">$1</a>'
                    ),
                }}
              />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default BlogSection;