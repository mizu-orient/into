// コマンドを定義する

const COMMANDS = [
    {
        command: "about",
        description: "About me",
    },
    {
        command: "education",
        description: "My education",
    },
    {
        command: "interests",
        description: "My interests",
    },
    {
        command: "skills",
        description: "My skills",
    },
    {
        command: "projects",
        description: "My projects",
    },
    {
        command: "contacts",
        description: "Contact me",
    },
    {
        command: "clear",
        description: "Clear Terminal",
    },
];

// asynchronous function 
const getProjects = async () => {
    const projects = await(await fetch("/api/projects")).json(); /* APIからプロジェクトを取得 */
    const projectHTML = `<h3>Projects(scroll up & down)</h3>` + projects.map( /* プロジェクトのHTMLを作成 */
        (project) => `<div class="command">
                     <a href="${project.link}"
                     target="_blank"><b class="command">${project.name}</b></a> - <b>${project.stack.join.(", ")}</b>
                     <p class="meaning">${project.description}</p>
                     </div>`
        ).join(""); /* 配列を文字列に変換 */
    return projectHTML; /* HTMLを返す */
};

const getContacts = async () => {
    const contactMediums = await(await fetch("/api/contacts")).json(); /* APIからコンタクトを取得 */
    return contactMediums.map(
        (contact) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${contact.medium}</p>
        <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
        </div>`
    ).join("");
};

export const CONTENTS = {
    help: () => COMMANDS.map(
        (command) => 
        `
        <div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
        </div>
        `
    ).join("") +
        `
        <br/>
        <div class="command">Type one of the above to view. e.g. <span style="color: var(--secondary)">about</span>
        </div>`,
    about: () => `My name is John Doe. I am ${getAge("February 10, 1991")} and I love computers.`,
    education: () => `I studied at the University of Life.`,
    interests: () => `I am interested in many things. Ask me what I like!`,
    projects: getProjects,
    contacts: getContacts,
    error: (input) => `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See 'help' for more information.</div>`,
};

function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString); /* 誕生日を取得 */
    let age = today.getFullYear() - birthDate.getFullYear(); /* 年齢を計算 */
    const m = today.getMonth() - birthDate.getMonth(); /* 月を取得 */
    if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { /* 誕生日が来ていない場合 */
        age--; /* 1歳引く */
    }
    return age;
}