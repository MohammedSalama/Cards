let names = ['John', 'Jane', 'Robert', 'Emily', 'Michael', 'Olivia', 'William', 'Sophia', 'James', 'Emma',
'Daniel', 'Ava', 'David', 'Mia', 'Joseph', 'Isabella', 'Richard', 'Abigail', 'Charles', 'Grace',
'Thomas', 'Ella', 'Christopher', 'Chloe', 'Matthew', 'Lily', 'Andrew', 'Anna', 'George', 'Madison',
'Edward', 'Avery', 'Samuel', 'Scarlett', 'Brian', 'Hannah', 'Alexander', 'Natalie', 'Steven', 'Amelia',
'Nicholas', 'Sofia', 'Benjamin', 'Liam', 'Emma', 'Ethan', 'Aiden', 'Oliver', 'Lucas', 'Mason',
'Logan', 'Elijah', 'Harper', 'Lillian', 'Evelyn', 'Grace', 'Hazel', 'Aria', 'Bella', 'Leah',
'Lucy', 'Stella', 'Zoe', 'Nora', 'Liam', 'Emma', 'Aiden', 'Olivia', 'Jackson', 'Sophia', 'Lucas',
'Isabella', 'Jack', 'Mia', 'Carter', 'Ava', 'Ethan', 'Ella', 'James', 'Charlotte', 'Mason',
'Amelia', 'Elijah', 'Harper', 'Ezra', 'Lily', 'Logan', 'Grace', 'Caleb', 'Sophie', 'Isaac',
'Madison', 'Benjamin', 'Aria','Muhammed','Ahmed','Salama','Mariem','Areeg','Mayar'
];

const ages = Array.from({ length: 100 }, () => Math.floor(Math.random() * 83) + 18);
// console.log(ages);
let container = document.createElement('div');
document.body.appendChild(container)
container.style.textAlign = 'center';

// Cards 
function element(names,ages)
{
    // Elements
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    // Content
    let head = document.createTextNode(names);
    let ageContent = document.createTextNode(ages);
    img.src = 'src/img/1.jpg';
    title.appendChild(head);
    age.appendChild(ageContent);

    // Style 
    card.style.width = '200px';
    img.style.width = '100%';
    card.style.background = 'brown';
    card.style.color = 'white';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';
    card.style.borderRadius = '5px';

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    // return card;
    container.appendChild(card);
}

for (let i = 0; i < 100; i++)
{
    element(names[i],ages[i]);
}
