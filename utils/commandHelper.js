const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "history",
    description: "My History",
  },
  {
    command: "skills",
    description: "My Tech Skills",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "blog",
    description: "Open my blog",
  },
  {
    command: "github",
    description: "Open my github",
  },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about: () => `HN：いぬお（${getAge("July 22, 1995")}）
    <br/>
     フルスタックを目指す駆け出しエンジニア。
     <br/>
     現在はバックエンドエンジニアとして働いています。
    <br/>
  `,
  history:
    () => `学歴：<a href="https://www.tohoku.ac.jp/japanese/" target="_blank">東北大学</a>　学部卒業＆修士課程修了 </br>職歴：大手オフィス機器メーカーへ新卒入社。3年半バックエンド開発に従事。<br></br>現在に至る`,
  skills: () => `
  <div class="skill"><b>言語</b>: Python, C/C++<br /></div>
  <div class="skill"><b>技術</b>: OAuth, Docker、Network, DB(MySQL, PostgreSQL, MariaDB)<br /></div>
  <div class="skill"><b>経験</b>: PM、PG、データサイエンス<br /></div>
  <div class="skill"><b>興味</b>: 言語[Typescript/Javascript, Go], 技術[Fintech, Cloud Computing, Kubernetes <br /></div><br />
  Githubも参照ください<a href="https://github.com/mizu-orient" target="_blank">here</a>.
<br />
  `,
  projects: getProjects,
  contact: getContacts,
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
  blog: () => {
    window.open("https://zenn.dev/inuo", "_blank");
    return "";
  },
  github: () => {
    window.open("https://github.com/mizu-orient", "_blank");
    return "";
  },
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}
