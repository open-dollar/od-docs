# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to
the `gh-pages` branch.

### Using GitHub Codespaces as a CMS

Rather than using a local editor, we can use GitHub Codespaces as a CMS for our Docusaurus site. This allows us to edit
and publish changes to our docs from the browser.
Thanks to GitHub Codespaces, we don't need every team member to have a local development environment to contribute to
the docs.
</br></br>
Here's how to get started with Codespaces:

1) In the documentation repository, click on the `Code` button and then the name of the codespace for it to start automatically
   <img width="420" alt="codespaces tab in repo" src="https://user-images.githubusercontent.com/47253537/209730854-47862a8e-d701-4e4c-b093-39e9ca50515d.png">
2) Notice that all the directories are on the left side of the screen
3) If you want to add a post to the blog, right-click on the blog directory and create a new file that ends in `.md`
4) Use the format of the other blog posts as guidance to add your own
5) To immediately see the changes you made, navigate to the blog section of the site in the codespace and click on the post you just
   added
6) To publish the changes, click on the `Source Control` tab on the left side of the screen, write a description of your
   change, and press commit and push
   <img width="344" alt="committing to repo with codespaces" src="https://user-images.githubusercontent.com/47253537/209730956-3554d066-e64a-4fa9-856d-fb42504a830f.png">



