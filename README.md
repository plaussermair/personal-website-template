# Personal Website Template 🌐
[🚀 Live Demo](https://personal-website-template-rust.vercel.app)  

Welcome to my **Personal Website Template**! This modern, open-source template is built with **Next.js** and **Tailwind CSS** to help you create your website quickly and easily. Whether you're a developer, or designer, or want to showcase your work, this template has you covered. 🚀

---

## Table of Contents 📚

1. [Getting Started](#getting-started-)
   - [Prerequisites](#prerequisites-)
   - [Installation](#installation-)
   - [Running the Development Server](#running-the-development-server-)
   - [Building for Production](#building-for-production-)
2. [Project Structure](#project-structure-)
3. [Customization](#customization-)
   - [Update Personal Information](#update-personal-information-)
   - [Add Your Content](#add-your-own-content-)
   - [Change the Theme](#change-the-theme-)
4. [Deployment](#deployment-)
   - [AWS Amplify](#aws-amplify-)
   - [Vercel](#vercel-)
5. [License](#license-)
6. [Contributing](#contributing-)
7. [Contact](#contact-)

---

## Getting Started 🛠️

### Prerequisites 📋

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation 📥

1. Clone the repository:

``` sh
git clone https://github.com/your-username/my-personal-website.git
cd my-personal-website
```

2. Install dependencies:

``` sh
npm install
# or
yarn install
```

### Running the Development Server 🖥️

Start the development server to see your website in action:

``` sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Building for Production 🏗️

To build the project for production, run:

``` sh
npm run build
# or
yarn build
```

To start the production server:

``` sh
npm start
# or
yarn start
```

---

## Project Structure 🗂️

Here’s an overview of the project structure:

```
my-personal-website/
├── app/
│   ├── blog/                # Blog page
│   ├── components/          # Reusable components (Header, Skills, etc.)
│   ├── contexts/            # Context providers (e.g., ThemeContext)
│   ├── hooks/               # Custom React hooks
│   ├── layout.tsx           # Main layout
│   ├── page.tsx             # Home page
│   └── styles/              # Global styles
├── public/                  # Static assets (images, icons, etc.)
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.mjs          # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # You're here! 😊
```

---

## Customization 🎨

### Update Personal Information ✏️

1. Open the relevant component files in the `app/components/` directory:
   - **Header.tsx**: Update your name, title, and social links.
   - **Experience.tsx**: Add your work experience.
   - **Education.tsx**: Add your educational background.
   - **SkillsCertifications.tsx**: List your skills and certifications.

2. Update the `page.tsx` file in the `app/` directory to customize the homepage content.

### Add Your Own Content 📝

- **Blog**: Add blog posts in the `app/blog/` directory.
- **Projects**: Create a new section in the `app/components/` directory to showcase your projects.

### Change the Theme 🌓

The template includes a **light/dark theme** toggle. To customize the theme:

1. Open `ThemeContext.tsx` in the `app/contexts/` directory.
2. Modify the theme colors in the `tailwind.config.js` file.

---

## Deployment 🚀

### AWS Amplify 🌍 (Free Tier Available)

1. Go to the [AWS Amplify Console](https://aws.amazon.com/amplify/).
2. Click **"Get Started"** and choose **"Host a web app"**.
3. Connect your GitHub repository and select your project.
4. Configure the build settings (Amplify will auto-detect Next.js).
5. Click **"Save and Deploy"**—Amplify will handle the rest!

Once deployed, your website will be available at a custom Amplify domain, which you can configure further in the console.

### Vercel ⚡(Free Tier Available)

1. Sign up at [Vercel](https://vercel.com/).
2. Import your GitHub repository.
3. Follow the prompts to deploy. Your site will be live in minutes!

---

## License 📜

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Contributing 🤝

Contributions are welcome! If you’d like to improve this template:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## Contact 📧

If you have any questions or would like to connect, feel free to reach out:

- **Email**: [phil.laussermair@gmail.com](mailto:phil.laussermair@gmail.com)

---

Enjoy building your website! 🎉 If you find this template helpful, please give it a ⭐ on GitHub!

--- 

Made with ❤️ by Philip Laussermair
