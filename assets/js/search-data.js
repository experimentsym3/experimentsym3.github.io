// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Link to my Google Scholar profile&lt;/",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "ToDo",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-resource-efficient-sensor-based-human-activity-recognition-with-lightweight-deep-models-boosted-with-attention-has-been-published-in-elsevier-s-computers-amp-amp-electrical-engineering",
          title: 'Our paper: “Resource-efficient, sensor-based human activity recognition with lightweight deep models boosted with...',
          description: "",
          section: "News",},{id: "news-successfully-defended-phd-dissertation-enhancing-lightweight-models-for-efficient-sensor-based-human-activity-recognition",
          title: 'Successfully defended PhD dissertation, “Enhancing Lightweight Models for Efficient Sensor-based Human Activity Recognition.”...',
          description: "",
          section: "News",},{id: "projects-who-s-wearing-the-glasses",
          title: 'Who’s Wearing the Glasses?',
          description: "User authentication and identification using head movements on smart glasses",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-how-does-a-cnn-learn",
          title: 'How Does a CNN Learn?',
          description: "A systematic exploration of CNN parameters on the CIFAR-10 dataset using TensorFlow",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-next-word-prediction-from-scratch",
          title: 'Next-Word Prediction from Scratch',
          description: "Building and training a multi-layer perceptron for next-word prediction on a 250-word vocabulary using only NumPy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-expectation-maximization-for-gmm-from-scratch",
          title: 'Expectation-Maximization for GMM from Scratch',
          description: "Step-by-step implementation of the expectation-maximization (EM) algorithm for Gaussian mixture models (GMMs) from scratch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-image-stitching-from-scratch",
          title: 'Image Stitching from Scratch',
          description: "Full implementation of homography estimation and panoramic image stitching from scratch, including SVD-based estimation, backward warping, and blending experiments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
