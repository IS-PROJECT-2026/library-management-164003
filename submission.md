# Project Submission Report

## 1. Student Details

- **Full Name:** Mbithi Keith Austine
- **GitHub Username:** Theedxctor
- **Email:** keith.mbithi@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/library-management-164003/

---

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/library-management-164003/issues/10


- **Why this one?**  
  This commit follows the full conventional commit specification it uses
  the correct type and scope tag, has a concise imperative subject line,
  includes a structured body explaining the why, and closes the issue in
  the footer with `Closes #10`.

---

### B. A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/library-management-164003/issues/1

- **What happened and how did you recover?**  
  During initial setup, the main branch was created off the feature branch
  `feat/1-project-scaffold` instead of being initialized independently,
  meaning the first PR had nothing to compare. I recovered by manually
  closing Issue #1, setting the branch protection rule immediately after,
  and ensuring every subsequent branch was checked out from a pulled main
  branch before any work began.

---

### C. A Pull Request You're Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/library-management-164003/issues/11

- **What did you check before merging?**  
  I reviewed the difference to confirm the two new stat card elements in
  `index.html` matched the new `readingBooks` and `percentRead` IDs
  being written by the updated `updateStats` function in `script.js`,
  and verified the PR description correctly referenced `Closes #11`.

---

### D. One Thing You Would Do Differently

- **What would you change?**  
  I would create and push an initial empty commit directly to main before
  creating any feature branches, so that the first PR has a clean base
  to compare against and the branch protection rule is in place from
  the very first commit.

- **Link to the evidence of the original decision:**  
  https://github.com/IS-PROJECT-2026/library-management-164003/tree/feat/1-project-scaffold

---

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues

[PASTE YOUR MILESTONE SCREENSHOT DIRECTLY HERE]

* **Caption:** Three milestones — Foundation & UI Scaffold, Core Library 
  Features, and Interactivity & Deployment — each with granular issues 
  linked before coding began.

---

### B. Project Board

[PASTE YOUR PROJECT BOARD SCREENSHOT DIRECTLY HERE]

* **Caption:** Kanban board showing all 13 issues moved through 
  To Do → In Progress → Done across the six development days.

---

### C. Branching Architecture

[PASTE YOUR BRANCHING SCREENSHOT DIRECTLY HERE]

* **Caption:** Remote branch list showing conventional issue-linked naming 
  across feat/, fix/, style/, docs/, chore/, and refactor/ prefixes.

---

### D. Pull Requests & Traceability

[PASTE YOUR PULL REQUEST SCREENSHOT DIRECTLY HERE]

* **Caption:** Pull request for feat/10-localstorage showing the 
  description body with `Closes #10` linking it directly to Issue #10 
  on the project board.

---

## 5. Merge Conflict Evidence

---

### Conflict 1 — Full Chronology

**What cause did you use?**  
Two branches independently editing the same line with different content 
(concurrent same-line modification).

#### Step 1: Generating the Clash

[PASTE SCREENSHOT OF TERMINAL SHOWING CONFLICT WARNING HERE]

* **Caption:** Merging conflict-branch-A into conflict-branch-B triggered 
  a conflict warning on `index.html` because both branches had modified 
  the `<title>` tag on the same line with different text.

---

#### Step 2: Inside the Code Editor (Conflict Markers)

[PASTE YOUR conflict_evidence_1.png HERE]

* **Caption:** VS Code showing the raw conflict markers — HEAD contained 
  "BookShelf — Personal Library Manager" from branch-B and the incoming 
  change contained "BookShelf — My Reading List" from branch-A. Kept the 
  branch-B version as it was more descriptive.

---

#### Step 3: Resolution & Clean Merge

[PASTE SCREENSHOT OF MERGED PR OR CLEAN GIT LOG HERE]

* **Caption:** Conflict markers removed, clean commit recorded as 
  "fix: resolve conflict 1 — same line edited differently on two branches", 
  and branch successfully merged into main via PR.

---

### Conflict 2 — Different Cause

**What cause did you use?**  
Divergent additions at the same file location (both branches appended 
new content at the identical position in the file).

**Why does this cause trigger a conflict?**  
When two branches both add different new lines at the exact same location
in a file, Git cannot determine which addition should come first or
whether both should be kept, since neither is a simple edit of existing
content — both are insertions at the same anchor point.

[PASTE YOUR conflict_evidence_2.png HERE]

* **Caption:** Both conflict-branch-C and conflict-branch-D appended a 
  CSS theme override block at the bottom of `style.css` — branch-C added 
  a light blue background and branch-D added a warm cream background, 
  producing overlapping conflict markers.

---

### Conflict 3 — Different Cause

**What cause did you use?**  
Delete versus modify conflict (one branch deleted content that another 
branch had modified).

**Why does this cause trigger a conflict?**  
Git tracks changes relative to a common ancestor. When one branch deletes
a section entirely and another branch modifies that same section, Git
cannot auto-resolve because it does not know whether the deletion or the
modification represents the intended final state.

[PASTE YOUR conflict_evidence_3.png HERE]

* **Caption:** conflict-branch-E deleted the Setup section from 
  `README.md` while conflict-branch-F expanded that same section with 
  additional clone instructions, causing Git to flag the delete/modify 
  collision on merge.

---

## 6. Feedback & Evaluation

- [ ] **Anonymous Evaluation Form:** 
[Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---

## Final Submission

> **Submission Form:** 
[https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)