# Git - Github

Initializing:

- Starting a repository with `git init`

Basic workflow:

- Checking the status with `git status`
- Staging files with `git add`
- Using the `.` shortcut to add all files
- Creating a commit with `git commit`
- Viewing the history with `git log`

Branching:

- Moving through the history with `git checkout <commit hash>`
- Branching out with `git checkout -b <branch name>`
- Viewing branches with `git branch`
- Merging with `git merge`

Cloning, Pushing and Pulling:

- Cloning a remote: `git clone <url>`
- Pushing changes: `git push`
- Pulling changes: `git pull`

Conflicts:

- Making changes to the same file in the same branch
- Resolving pull conflicts
- To Minimiz conflicts: Single branch per person per task

Reviewing:

- Creating a Pull Request on GitHub
- Pull Request review process
- Dealing with conflicts in Pull Request
- Merging on GitHub

#### new repo

```
echo "# YOUR-REPO-NAME" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:YOUR-ACCOUNT/YOUR-REPO.git
git push -u origin main

```

#### upstream

If you have cloned repository from someone and it would update often and you want to get those updates from time to time, then instead of editing origin it would be best to add a new remote:

```
$ git remote rename origin upstream
$ git remote add origin https://github.com/YOUR-ACCOUNT/YOUR_REPO
# or
git remote add origin git@github.com:YOUR-ACCOUNT/YOUR-REPO.git
```

Then whenever you want to check if there is changes from upstream, you can do:

```
$ git fetch upstream
```

However if you want to pull from the original repo you will use:

```
$ git pull upstream main
```

Happy coding 🙂
