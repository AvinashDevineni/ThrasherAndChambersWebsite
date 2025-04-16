# Thrasher & Chambers Website

This repository contains the source code for the Thrasher & Chambers school project website.

**You can see the current live website here:** [https://avinashdevineni.github.io/ThrasherAndChambersWebsite/](https://avinashdevineni.github.io/ThrasherAndChambersWebsite/)

## Table of Contents

*   [1. Required Setup](#1-required-setup)
*   [2. Getting the Code](#2-getting-the-code)
*   [3. Running the Code Locally](#3-running-the-code-locally)
*   [4. Uploading Your Changes (Contributing)](#4-uploading-your-changes-contributing)

## 1. Required Setup

Before you start, you need to install a few things and create an account:

*   **VS Code:** A code editor. Download from [code.visualstudio.com](https://code.visualstudio.com/).
*   **VS Code Live Server Extension:** Inside VS Code, go to the Extensions view (usually an icon on the left sidebar) and search for "Live Server" and install it. This helps you preview the website.
*   **Git:** A tool to manage code versions and copy the project. Download from [git-scm.com](https://git-scm.com/downloads).
*   **GitHub Account:** You need an account on [GitHub.com](https://github.com/) to make your own copy of the code and suggest changes.

## 2. Getting the Code

To work on the project, you need your own copy:

1.  **Fork the Repository:**
    *   Go to the main project page: [https://github.com/AvinashDevineni/ThrasherAndChambersWebsite/](https://github.com/AvinashDevineni/ThrasherAndChambersWebsite/)
    *   Click the **"Fork"** button in the top-right corner. This creates a personal copy of the project under your GitHub account.

2.  **Clone Your Fork:**
    *   Go to **your** forked repository page on GitHub (it will be something like `https://github.com/YourUsername/ThrasherAndChambersWebsite`).
    *   Click the green **"< > Code"** button.
    *   Make sure "HTTPS" is selected, and copy the URL (it looks like `https://github.com/YourUsername/ThrasherAndChambersWebsite.git`).
    *   Open your computer's terminal (or Git Bash on Windows).
    *   Run the following command, replacing the URL with the one you copied:
        ```bash
        git clone https://github.com/YourUsername/ThrasherAndChambersWebsite.git
        ```

3.  **Navigate into the Folder:**
    *   Once cloning is finished, move into the new project folder:
        ```bash
        cd ThrasherAndChambersWebsite
        ```

4.  **(Optional but Recommended) Link to Original Repository:**
    *   To make it easier to get updates from the main project later if needed, add a link to it. Call it `upstream`:
        ```bash
        git remote add upstream https://github.com/AvinashDevineni/ThrasherAndChambersWebsite.git
        ```

5.  **Open in VS Code:**
    *   While still in the `ThrasherAndChambersWebsite` folder in your terminal, type:
        ```bash
        code .
        ```
    *   This should open the project folder in VS Code.

## 3. Running the Code Locally

Now that you have the code and VS Code open:

1.  Make sure you installed the **Live Server** extension (from the Setup step).
2.  Look for the **"Go Live"** button in the bottom-right status bar of VS Code. Click it.
3.  Your web browser should open a new tab showing the website. Changes you save in VS Code will automatically update in the browser. This lets you test your work!

## 4. Uploading Your Changes (Contributing)

When you've made changes you want to share back to the main project:

1.  **Save Your Changes:** Make sure you've saved all the files you edited in VS Code.

2.  **Stage Your Files:** Tell Git which files you want to include in your update. The easiest way is to include all changes:
    ```bash
    git add .
    ```

3.  **Commit Your Changes:** Save a snapshot of your changes with a descriptive message. **Be specific in your message** so others know what you did!
    ```bash
    git commit -m "ENTER YOUR DETAILED MESSAGE HERE (e.g., Fixed typo on contact page)"
    ```

4.  **Push to Your Fork:** Send your committed changes up to *your* copy (your fork) on GitHub.
    ```bash
    git push origin main
    ```
    *(This pushes the changes from your local `main` branch to the `main` branch on your GitHub fork).*

5.  **Create a Pull Request (PR):** This is how you propose your changes to the main project.
    *   Go to **your forked repository** on GitHub (e.g., `https://github.com/YourUsername/ThrasherAndChambersWebsite`).
    *   You should see a yellow banner saying "Your branch is ahead of AvinashDevineni:main by X commits." with a **"Contribute"** or **"Compare & pull request"** button. Click it.
    *   If you don't see the banner, go to the "Pull requests" tab and click "New pull request".
    *   **Check the settings:**
        *   **Base repository:** Should be `AvinashDevineni/ThrasherAndChambersWebsite`
        *   **Base branch:** Should be `main`
        *   **Head repository:** Should be *Your* fork (e.g., `YourUsername/ThrasherAndChambersWebsite`)
        *   **Compare branch:** Should be `main`
    *   Add a clear **Title** and a **Description** explaining your changes.
    *   Click **"Create pull request"**.

That's it! Your proposed changes are now submitted for review.
