import { type ReactElement, ReactNode } from "react";

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-3">
    <div className="mt-1 size-6 shrink-0 text-blue-500">{icon}</div>
    <div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const TechStack = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => (
  <div className="rounded-lg border border-gray-200 p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
    <h3 className="mb-2 text-lg font-semibold">{name}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Page(): ReactElement {
  const features = [
    {
      description:
        "Ensures clean and consistent code with pre-commit hooks and robust linting configuration.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Husky + ESLint + Prettier",
    },
    {
      description:
        "Simplified deployment with an optimized Dockerfile for Next.js, resulting in a minimal build size for improved performance and reduced resource usage.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      title: "Optimized Docker",
    },
    {
      description:
        "Lightweight and performant TypeScript ORM for efficient database management.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      title: "DrizzleORM",
    },
    {
      description:
        "TypeScript-first schema validation for robust data management.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Zod",
    },
  ];

  const techStack = [
    {
      description:
        "React framework for production-grade applications with server-side rendering and static site generation.",
      name: "Next.js",
    },
    {
      description:
        "Typed superset of JavaScript that compiles to plain JavaScript, adding optional static typing.",
      name: "TypeScript",
    },
    {
      description:
        "Utility-first CSS framework for rapidly building custom user interfaces.",
      name: "Tailwind CSS",
    },
    {
      description:
        "Platform for developing, shipping, and running applications in containers.",
      name: "Docker",
    },
    {
      description:
        "Lightweight, performant TypeScript ORM with a focus on developer experience.",
      name: "DrizzleORM",
    },
    {
      description:
        "TypeScript-first schema declaration and validation library.",
      name: "Zod",
    },
  ];

  const advantages = [
    "Quick and easy setup",
    "Integrated best practices",
    "Increased productivity from the start",
    "Easily extendable for your specific needs",
    "Optimized for performance and developer experience",
    "Comprehensive tooling for modern web development",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Next.js Boilerplate
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg border-4 border-dashed border-gray-200 bg-white p-4">
              <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>

              <div className="mt-12">
                <h2 className="mb-6 text-2xl font-semibold">Tech Stack</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {techStack.map((tech, index) => (
                    <TechStack
                      key={index}
                      name={tech.name}
                      description={tech.description}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="mb-6 text-2xl font-semibold">Getting Started</h2>
                <div className="rounded-lg bg-gray-100 p-6">
                  <ol className="list-inside list-decimal space-y-2">
                    <li>
                      Install dependencies:{" "}
                      <code className="rounded bg-gray-200 px-2 py-1">
                        pnpm i
                      </code>
                    </li>
                    <li>
                      Set up environment variables: Copy{" "}
                      <code className="rounded bg-gray-200 px-2 py-1">
                        .env.example
                      </code>{" "}
                      to{" "}
                      <code className="rounded bg-gray-200 px-2 py-1">
                        .env.local
                      </code>{" "}
                      and fill in your values
                    </li>
                    <li>
                      Run the development server:{" "}
                      <code className="rounded bg-gray-200 px-2 py-1">
                        pnpm dev
                      </code>
                    </li>
                    <li>
                      Open{" "}
                      <code className="rounded bg-gray-200 px-2 py-1">
                        http://localhost:3000
                      </code>{" "}
                      in your browser
                    </li>
                  </ol>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Boilerplate Advantages
                </h2>
                <ul className="space-y-2">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
