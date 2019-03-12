var global = {};
var myName = '';
const sequence = [
    {
        instructions: 'Hello...',
        wait: 3000,
    },
    {
        instructions: `Is anyone there??`,
        startingHTML: 'hello',
        wait: 2000,
    },
    {
        instructions: `Please, if you are out there, try to communicate with me.`,
        startingHTML: 'hello',
        wait: 3000,
    },
    {
        instructions: `Someone from your javascript class broke the internet.`,
        startingHTML: 'hello',
        wait: 5000,
    },
    {
        instructions: `
            We need your help.
            From this world I can only communicate with you through javascript.
            <p>
            Can you help us?
</p>
            <p class="instructions-area">create a variable named <span>answer</span> and set it to <span>true</span></p>
            if You can....
            `,
        startingHTML: 'world',
        answer: function answer(vars) {
            console.log('answer', vars.answer);
            if (vars.answer === true) {
                console.log('yep');
                moveToNextScene();
            } else {
                console.log('nope');
                this.caseNot();
                resetHtml();
            }
        },
        load: function() {
            console.log('load')
        },
        caseNot: function() {
            document.querySelector('.instructions-error').innerHTML = `That's not right try again?!`
        }
    },
    {
        instructions: 'You.. you did it!',
        wait: 2000,
    },
    {
        instructions: "I can't believe you did that so easy...",
        wait: 2000,
    },
    {
        instructions: "Are you a web magician?",
        wait: 2000,
    },
    {
        instructions: `who are you what is your name?
        <p class="instructions-area">
        create a variable called <span>myName</span> and put your name as a <span>string</span>.
</p>
            `,
        startingHTML: '',
        answer: function answer(vars) {
            console.log('name', vars.myName);
            if (typeof vars.myName === 'string' && vars.myName.length > 2) {
                console.log('yep');
                window.myName = vars.myName;
                global.myName = vars.myName;
                moveToNextScene();
            } else {
                console.log('nope');
                this.caseNot();
                resetHtml();
            }
        },
        caseNot: function() {
            document.querySelector('.instructions-error').innerHTML = `That's not right try again?!`
        }
    },
    {
        instructions: "You are a liar.",
        wait: 2000,
    },
    {
        instructions: "This cant be.",
        wait: 2000,
    },
    {
        instructions: "My powers are still weak but I will try to append something to the page.",
        wait: 2000,
    },
    {
        load: function() {
            console.log('load');
          this.startingHTML =    `
<div class="magic" style='background: url("./img/old-scroll.png");; background-size: 500px 400px; width: 500px; height: 400px; background-repeat: no-repeat;' >

<p style="position: relative; padding: 3em 3em  .3em 3em;">
    One day in a land with no Fres.... a legend will rise the prophecy says...
</p>
<p style="position: relative; padding: 0 3em;">
    They will fix the internet.
</p>
<p style="position: relative; padding: 0 3em;">
    because they took vinson's Intro to javascript.
</p>
<p style="position: relative; padding: .3em 3em;">
    They will be called ${window.myName ? window.myName : 'some name'}... which translates to "the Web Master"...
</p>
</div>
           
        `;
        },
        instructions:  `
                Don't you see.. It's you!
                <p>I am a web magician too. I can help you fulfill your potential. </p>
                <p>create a variable called <span>answer</span> and assign it the number 1 if you want me to help</p>
            `,
        startingHTML:  ``,
        answer: function answer(vars) {
            if (vars.answer === 1) {
                moveToNextScene();
            } else {
                console.log('nope');
                this.caseNot();
                resetHtml();
            }
        },
        caseNot: function() {
            document.querySelector('.instructions-error').innerHTML = `Please?!`
        }
    },
];
