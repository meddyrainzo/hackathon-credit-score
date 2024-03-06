import { Quiz } from '../model/question';

export const quizQuestions: Quiz[] = [
  {
    Category: 'EDM',
    Title: 'Effective Financial Decision-Making',
    Questions: [
      {
        Question: 'Which of the following would be the most annoying for you?',
        Answers: [
          {
            value: "When I can't afford something I want to get",
            weights: '-2',
          },
          { value: "Credits that I didn't pay", weights: '-1' },
          { value: "Losing someone's trust", weights: '1' },
          { value: "Promises I couldn't keep", weights: '2' },
        ],
      },
      {
        Question: "What kind of person wouldn't be friends with?",
        Answers: [
          {
            value: 'A selfish person who never takes care of others',
            weights: '-2',
          },
          { value: 'A person who offended me', weights: '-1' },
          { value: "A person who doesn't keep their promises", weights: '1' },
          { value: 'A person who promises impossible things', weights: '2' },
        ],
      },
      {
        Question: 'What kind of person do you prefer to be?',
        Answers: [
          { value: 'Someone who never lies', weights: '-2' },
          { value: 'Someone who has many friends', weights: '-1' },
          { value: 'Someone who doesn’t hurt others', weights: '1' },
          { value: 'Someone who does what they can do', weights: '2' },
        ],
      },
      {
        Question: 'In my view, having a debt is …',
        Answers: [
          { value: 'Something that makes me irritated', weights: '-2' },
          { value: 'Not something good', weights: '-1' },
          {
            value: 'Something that solves my financial problems',
            weights: '1',
          },
          {
            value: 'Not a problem for me because I can always repay',
            weights: '2',
          },
        ],
      },
      {
        Question:
          'What would be the reason when someone refused to lend you money?',
        Answers: [
          { value: 'They are so mean', weights: '-2' },
          {
            value: 'Such a selfish person, not realizing my condition',
            weights: '-1',
          },
          { value: "Maybe they don't lend money to anyone", weights: '1' },
          { value: 'It’s okay. Maybe they were not possible', weights: '2' },
        ],
      },
      {
        Question:
          'What would be your response when someone doesn’t give you the money they borrowed?',
        Answers: [
          { value: 'Usually I forget about things like that', weights: '-2' },
          { value: 'Wait for them to give the money back', weights: '-1' },
          { value: 'Do everything to get the money back', weights: '1' },
          { value: 'Remind them the money back', weights: '1' },
        ],
      },
      {
        Question:
          "What would you do when you meet someone who hasn't given your valuable thing back? Choose one of the following",
        Answers: [
          { value: 'Yell at them and claim my belonging', weights: '-2' },
          { value: 'Firstly greet and then claim my belonging', weights: '-1' },
          { value: "Don't say anything until they mention it", weights: '1' },
          { value: 'Kindly ask for my belonging', weights: '2' },
        ],
      },
      {
        Question: 'I feel anger when I receive bills',
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
      {
        Question: 'I am afraid of financial loss',
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
    ],
  },
  {
    Category: 'SCR',
    Title: 'Self-Control',
    Questions: [
      {
        Question:
          'If you have a reason to change yourself, what would be the reason?',
        Answers: [
          { value: 'to lead my team', weights: '-2' },
          { value: 'to get a job', weights: '-1' },
          { value: 'for my family', weights: '1' },
          { value: 'to impress someone I like', weights: '2' },
        ],
      },
      {
        Question: 'What advice would you give to current high school students?',
        Answers: [
          {
            value:
              'Create the best memories, because childhood will never be found again',
            weights: '-2',
          },
          { value: 'Study hard', weights: '-1' },
          {
            value: 'It is better to learn from the generation before you',
            weights: '1',
          },
          {
            value: 'Being kind is more important than being knowledgeable',
            weights: '2',
          },
        ],
      },
      {
        Question: 'Which of the following is the most embarrassing?',
        Answers: [
          { value: "Can't do the things that others can do", weights: '-2' },
          { value: 'Mistakes I made', weights: '-1' },
          { value: 'Others thinking I am weak', weights: '1' },
          { value: 'Lack of skills', weights: '2' },
        ],
      },
      {
        Question:
          "You have a big exam tomorrow but you haven't prepared well enough. What would you do?",
        Answers: [
          { value: 'Cheat on the exam', weights: '-2' },
          {
            value: "Lie that I am sick and don't take the exam",
            weights: '-1',
          },
          { value: 'Ask for help from others', weights: '1' },
          {
            value: "Even if I didn't prepare, just go and take the exam",
            weights: '2',
          },
        ],
      },
      {
        Question: 'How satisfied are you about your life?',
        Answers: [
          { value: '1-3', weights: '-2' },
          { value: '4-6', weights: '-1' },
          { value: '7-8', weights: '1' },
          { value: '9-10', weights: '2' },
        ],
      },
      {
        Question:
          'An old acquaintance offered you a high-paying job. But you have already planned your career. What will be your decision?',
        Answers: [
          { value: 'I accept the offer', weights: '-2' },
          { value: 'I reconsider the offer', weights: '-1' },
          { value: 'I postpone the offer', weights: '1' },
          { value: 'I reject the offer', weights: '2' },
        ],
      },
      {
        Question:
          'You are in a rush and need to tell urgent information to your colleague when he is on the phone. What would be your response?',
        Answers: [
          { value: 'Wait until he finishes talking', weights: '-2' },
          { value: 'I have no time so I will whisper', weights: '-1' },
          { value: 'I directly tell him cause it is urgent', weights: '1' },
          {
            value: 'Wait for a while and gesture to tell something important',
            weights: '2',
          },
        ],
      },
      {
        Question:
          'After a busy working day, you came home and wanted to watch your favorite TV show. But it is almost sleep time and TV can irritate other family members. What would you do?',
        Answers: [
          { value: 'Just keep watching the show', weights: '-2' },
          {
            value: 'Volume down and continue watching the show',
            weights: '-1',
          },
          {
            value: 'Ask others whether it is fine to watch TV or not',
            weights: '1',
          },
          { value: 'Turn the TV off', weights: '2' },
        ],
      },
      {
        Question: 'Which of the following might be the most important to you?',
        Answers: [
          { value: 'Making others happy', weights: '-2' },
          { value: 'Not hurting others', weights: '-1' },
          { value: 'Not disturbing others', weights: '1' },
          { value: 'Respecting others', weights: '2' },
        ],
      },
      {
        Question: 'Which of the following might be the biggest fear for you?',
        Answers: [
          { value: 'To be hated', weights: '-2' },
          { value: 'To lose', weights: '-1' },
          { value: 'To be irresponsible', weights: '1' },
          { value: 'To be rejected', weights: '2' },
        ],
      },
      {
        Question: 'For me, being dumped is...',
        Answers: [
          {
            value: 'It is okay. It will be better when time goes by',
            weights: '-2',
          },
          { value: 'Not a big deal', weights: '-1' },
          { value: 'Would be hard but I can go through it', weights: '1' },
          {
            value: 'Would be the hardest thing and it is my biggest fear',
            weights: '2',
          },
        ],
      },
      {
        Question:
          'When you feel healthier before the end of treatment, what would you do?',
        Answers: [
          { value: 'Stop having medicine', weights: '-2' },
          {
            value: 'Visit the doctor, after a short interruption',
            weights: '-1',
          },
          { value: 'Continue having medicine to the end', weights: '1' },
          {
            value: 'Visit the doctor after finishing the medicine',
            weights: '2',
          },
        ],
      },
      {
        Question: 'I think I need to be more disciplined',
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
      {
        Question: 'Which one helps you to relax more?',
        Answers: [
          { value: 'Smoking a cigarette', weights: '-2' },
          { value: 'A piece of cake', weights: '-1' },
          { value: 'Seeing a doctor', weights: '1' },
          { value: 'Meditation', weights: '2' },
        ],
      },
      {
        Question:
          'How do you describe the balance of your work and personal life?',
        Answers: [
          { value: 'I work extra hours', weights: '-2' },
          { value: 'Sometimes I work extra hours', weights: '-1' },
          { value: 'I enjoy personal life more than work', weights: '1' },
          {
            value: 'I have a good work and personal life balance',
            weights: '2',
          },
        ],
      },
      {
        Question: 'I have had a hard time breaking bad habits',
        Answers: [
          { value: 'Yes', weights: '-2' },
          { value: 'Maybe', weights: '-1' },
          { value: "Don't know", weights: '1' },
          { value: 'No', weights: '2' },
        ],
      },
    ],
  },
  {
    Category: 'CON',
    Title: 'Conscientiousness',
    Questions: [
      {
        Question: 'Have you ever not gone to work because you were fed up?',
        Answers: [
          { value: 'Yes', weights: '-2' },
          { value: 'Maybe', weights: '-1' },
          { value: 'Not exactly', weights: '1' },
          { value: 'Never', weights: '2' },
        ],
      },
      {
        Question:
          'On average, how many hours a day does a team member who does not need to use the Internet surf the internet?',
        Answers: [
          { value: '0-15 minutes', weights: '-2' },
          { value: '15-30 minutes', weights: '-1' },
          { value: '30-60 minutes', weights: '1' },
          { value: '60-90 minutes', weights: '2' },
        ],
      },
      {
        Question: 'Have you ever promised something when you are emotional?',
        Answers: [
          { value: 'Yes, I have forgotten the promise', weights: '-2' },
          { value: 'That happened a few times', weights: '-1' },
          { value: 'Yes, but I regret it', weights: '1' },
          { value: 'I always be careful with making promises', weights: '2' },
        ],
      },
      {
        Question:
          'What is the most important thing you have learned from your parents?',
        Answers: [
          { value: 'Education', weights: '-2' },
          { value: 'Manners', weights: '-1' },
          { value: 'Responsibility', weights: '1' },
          { value: 'Patience', weights: '2' },
        ],
      },
      {
        Question: 'From whom do you usually hide your irresponsibility?',
        Answers: [
          { value: 'From myself', weights: '-2' },
          { value: 'From my family', weights: '-1' },
          { value: 'From my colleagues', weights: '1' },
          { value: 'From my friends', weights: '2' },
        ],
      },
      {
        Question:
          'You have to share 12 dollars with a stranger. There will be the following options. Which one do you prefer?',
        Answers: [
          {
            value: 'I get 8 dollars and a stranger gets 4 dollars',
            weights: '-2',
          },
          {
            value: 'I get 6 dollars and a stranger gets 6 dollars',
            weights: '-1',
          },
          {
            value: 'I get 5 dollars and a stranger gets 7 dollars',
            weights: '1',
          },
          { value: "Decide by the stranger's suggestion", weights: '2' },
        ],
      },
      {
        Question: "I have bad memories about losing others' trust",
        Answers: [
          { value: 'Never', weights: '-2' },
          { value: 'Maybe that happened 1-3 months ago', weights: '-1' },
          { value: '2-3 years ago happened to me', weights: '1' },
          { value: 'A year ago that happened', weights: '2' },
        ],
      },
      {
        Question:
          "You are at the neighbor's house to babysit their child, and he is asleep. Your neighbors will arrive in two hours but you are bored, what would you do?",
        Answers: [
          { value: 'Go and see the bedroom', weights: '-2' },
          { value: 'Watch TV in the living room', weights: '-1' },
          { value: 'Turn the computer on and surf the internet', weights: '1' },
          { value: 'Wash the dishes', weights: '2' },
        ],
      },
      {
        Question: "When you need to do something you don't like:",
        Answers: [
          { value: 'Leaving immediately', weights: '-2' },
          { value: 'Get angry', weights: '-1' },
          { value: 'Do it somehow', weights: '1' },
          { value: "It's normal to happen this kind of things", weights: '2' },
        ],
      },
      {
        Question: 'Which of the following do you put aside the most?',
        Answers: [
          { value: 'Take care of others', weights: '-2' },
          { value: 'Daily planning', weights: '-1' },
          { value: 'Make time for myself', weights: '1' },
          { value: 'Utility bills', weights: '2' },
        ],
      },
      {
        Question: 'What percentage of your work is usually completed on time?',
        Answers: [
          { value: '0-24%', weights: '-2' },
          { value: '25-49%', weights: '-1' },
          { value: '75-100%', weights: '1' },
          { value: '50-74%', weights: '2' },
        ],
      },
      {
        Question: 'What do you do when you are stressed?',
        Answers: [
          { value: 'Become quiet', weights: '-2' },
          { value: 'Focus on work', weights: '-1' },
          { value: 'Talk', weights: '1' },
          { value: 'Do what I like', weights: '2' },
        ],
      },
      {
        Question: 'Which of the following payments do you usually delay?',
        Answers: [
          { value: 'Loan', weights: '-2' },
          { value: 'Utility bills', weights: '-1' },
          { value: 'Telecommunication fees', weights: '1' },
          { value: 'Tuition fee', weights: '2' },
        ],
      },
      {
        Question:
          'You find that a letter addressed to someone has fallen to the ground. What would you do?',
        Answers: [
          { value: 'Will open the letter and read it', weights: '-2' },
          {
            value: "Leave it where it was. Because it doesn't matter to me",
            weights: '-1',
          },
          {
            value: 'Will not read the letter, deliver it to the addressee',
            weights: '1',
          },
          { value: 'Will tear the letter', weights: '2' },
        ],
      },
      {
        Question: 'When you must attend an important meeting, you:',
        Answers: [
          {
            value: 'I will simply have a rest. Everything will be alright.',
            weights: '-2',
          },
          {
            value: 'Despite my worries, I can take a good rest.',
            weights: '-1',
          },
          {
            value: 'I will sleep after verifying essential things.',
            weights: '1',
          },
          { value: "I can't sleep well because of my worries.", weights: '2' },
        ],
      },
      {
        Question: 'Once I start something, I finish it',
        Answers: [
          { value: 'No', weights: '-2' },
          { value: "Don't know", weights: '-1' },
          { value: 'Maybe', weights: '1' },
          { value: 'Yes', weights: '2' },
        ],
      },
    ],
  },
  {
    Category: 'SGA',
    Title: 'Selflessness',
    Questions: [
      {
        Question:
          'Which of the following can disturb the family atmosphere from your perspective?',
        Answers: [
          { value: 'Rude attitude and communication', weights: '-2' },
          { value: 'Not having fun', weights: '-1' },
          { value: 'Not talking', weights: '1' },
          { value: 'Not making time for each other', weights: '2' },
        ],
      },
      {
        Question: 'Which is more important to you?',
        Answers: [
          { value: 'My efforts', weights: '-2' },
          { value: 'Being calm', weights: '-1' },
          { value: 'Making time for myself', weights: '1' },
          { value: 'Having no family problems', weights: '2' },
        ],
      },
      {
        Question: 'I spend ....... hours a day with my family',
        Answers: [
          { value: 'Up to 1', weights: '-2' },
          { value: '3-4', weights: '-1' },
          { value: '1-2', weights: '1' },
          { value: '2-3', weights: '2' },
        ],
      },
      {
        Question: 'People say I am a family-oriented person',
        Answers: [
          { value: 'Never', weights: '-2' },
          { value: 'No', weights: '-1' },
          { value: 'Yes', weights: '1' },
          { value: 'Exactly', weights: '2' },
        ],
      },
      {
        Question: 'Where do you like to be the most?',
        Answers: [
          { value: 'Everywhere is the same', weights: '-2' },
          { value: 'Outdoors, in a cozy environment', weights: '-1' },
          { value: 'At work', weights: '1' },
          { value: 'At home', weights: '2' },
        ],
      },
      {
        Question: 'When I feel sorry for others, I share what I have.',
        Answers: [
          { value: 'Never', weights: '-2' },
          { value: 'No', weights: '-1' },
          { value: 'Yes', weights: '1' },
          { value: 'Exactly', weights: '2' },
        ],
      },
      {
        Question:
          "When you were a child, how familiar were you with your household's financial management",
        Answers: [
          { value: 'Strongly disagree', weights: '-2' },
          { value: 'Disagree', weights: '-1' },
          { value: 'Agree', weights: '1' },
          { value: 'Strongly agree', weights: '2' },
        ],
      },
      {
        Question:
          'It is difficult to say no to my manager if they give an extra work.',
        Answers: [
          { value: 'Never', weights: '-2' },
          { value: 'No', weights: '-1' },
          { value: 'Yes', weights: '1' },
          { value: 'Exactly', weights: '2' },
        ],
      },
      {
        Question: 'Which purchase would you prefer?',
        Answers: [
          { value: 'Things I need', weights: '-2' },
          { value: 'Things I want', weights: '-1' },
          { value: 'Things my loved ones want', weights: '1' },
          { value: 'Things my family or co-worker needs', weights: '2' },
        ],
      },
      {
        Question:
          'I find it difficult doing the tasks which are not specified in my job description.',
        Answers: [
          { value: 'Often', weights: '-2' },
          { value: 'Always', weights: '-1' },
          { value: 'Rarely', weights: '1' },
          { value: 'Never', weights: '2' },
        ],
      },
      {
        Question: "I'm not the person who tries to be agreeable with everyone",
        Answers: [
          { value: 'Yes', weights: '-2' },
          { value: 'Maybe', weights: '-1' },
          { value: 'Don’t know', weights: '1' },
          { value: 'No', weights: '2' },
        ],
      },
      {
        Question: 'Do you like to give presents?',
        Answers: [
          { value: 'Never', weights: '-2' },
          {
            value:
              'Give present if I have to, unless don’t feel happiness from giving a present to others',
            weights: '-1',
          },
          {
            value: 'I like to give gifts to my friends and family',
            weights: '1',
          },
          { value: 'Always happy to give presents', weights: '2' },
        ],
      },
      {
        Question: 'There is a conflict about money in our family',
        Answers: [
          { value: 'Once and more in a week', weights: '-2' },
          { value: 'Once in two weeks', weights: '-1' },
          { value: 'Once in a quarter', weights: '1' },
          { value: 'Once in a month', weights: '2' },
        ],
      },
      {
        Question:
          'You were traveling in a train with three people. The book you were reading was in a very interesting part.',
        Answers: [
          {
            value: 'Turn on the lights and read the book silently.',
            weights: '-2',
          },
          { value: 'I apologize and leave the light on', weights: '-1' },
          {
            value:
              'Ask if the light can be turned on, and if not, leave it off',
            weights: '1',
          },
          { value: 'Leave the light off', weights: '2' },
        ],
      },
      {
        Question: 'Which of the following does matter to you the most?',
        Answers: [
          { value: 'Your room', weights: '-2' },
          { value: 'Your house or flat', weights: '-1' },
          { value: 'Your neighbourhood', weights: '1' },
          { value: 'Your city', weights: '2' },
        ],
      },
      {
        Question: 'The success of others inspires me',
        Answers: [
          { value: 'Never', weights: '-2' },
          { value: 'No', weights: '-1' },
          { value: 'Yes', weights: '1' },
          { value: 'Exactly', weights: '2' },
        ],
      },
    ],
  },
  {
    Category: 'ATM',
    Title: 'Attitude Towards Money',
    Questions: [
      {
        Question: "I try not to think about money because I'm stressed out",
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
      {
        Question: 'It is not okay having more money than you need',
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
      {
        Question: "Although I can afford it, I don't buy new things too often.",
        Answers: [
          { value: 'Strongly disagree', weights: '-2' },
          { value: 'Disagree', weights: '-1' },
          { value: 'Agree', weights: '1' },
          { value: 'Strongly agree', weights: '2' },
        ],
      },
      {
        Question: "I can't throw away some things even I don't need them",
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
      {
        Question: 'My financial situation makes me feel safe and secure',
        Answers: [
          { value: 'Strongly disagree', weights: '-2' },
          { value: 'Disagree', weights: '-1' },
          { value: 'Agree', weights: '1' },
          { value: 'Strongly agree', weights: '2' },
        ],
      },
      {
        Question: 'My family resents me for working too hard for money',
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
      {
        Question: 'I try not to think about my financial situation',
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
      {
        Question: 'Money is for saving, not for spending',
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
      {
        Question:
          'It is important to save money for things that may happen in the future',
        Answers: [
          { value: 'Strongly disagree', weights: '-2' },
          { value: 'Disagree', weights: '-1' },
          { value: 'Agree', weights: '1' },
          { value: 'Strongly agree', weights: '2' },
        ],
      },
      {
        Question: "It's not easy for me to reduce impulsive buying",
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
      {
        Question: 'I often buy more than I can afford',
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
      {
        Question:
          'At the end of the month, I run out of money due to the credit payment and expenses',
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
      {
        Question: 'I get anxious every time I look at my bank account balance',
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
      {
        Question: 'I have a problem suppressing my desire to buy what I like',
        Answers: [
          { value: 'Always', weights: '-2' },
          { value: 'Often', weights: '-1' },
          { value: 'Rarely', weights: '1' },
          { value: 'Never', weights: '2' },
        ],
      },
      {
        Question: "I constantly follow my 'budget'",
        Answers: [
          { value: 'Never', weights: '-2' },
          { value: 'Rarely', weights: '-1' },
          { value: 'Often', weights: '1' },
          { value: 'Always', weights: '2' },
        ],
      },
      {
        Question: 'It is difficult for me to follow a financial plan',
        Answers: [
          { value: 'Always', weights: '-2' },
          { value: 'Often', weights: '-1' },
          { value: 'Rarely', weights: '1' },
          { value: 'Never', weights: '2' },
        ],
      },
      {
        Question: 'I economize for the future',
        Answers: [
          { value: 'Never', weights: '-2' },
          { value: 'Rarely', weights: '-1' },
          { value: 'Often', weights: '1' },
          { value: 'Always', weights: '2' },
        ],
      },
      {
        Question: 'I spend money on valuable things only',
        Answers: [
          { value: 'No', weights: '-2' },
          { value: 'Not sure', weights: '-1' },
          { value: 'Likely yes', weights: '1' },
          { value: 'Yes', weights: '2' },
        ],
      },
      {
        Question:
          'When I was a child, my family usually asked for my opinion when buying something new',
        Answers: [
          { value: 'Strongly disagree', weights: '-2' },
          { value: 'Disagree', weights: '-1' },
          { value: 'Agree', weights: '1' },
          { value: 'Strongly agree', weights: '2' },
        ],
      },
      {
        Question: 'I carefully plan my spending before making a purchase',
        Answers: [
          { value: 'Strongly disagree', weights: '-2' },
          { value: 'Disagree', weights: '-1' },
          { value: 'Agree', weights: '1' },
          { value: 'Strongly agree', weights: '2' },
        ],
      },
      {
        Question: 'I avoid talking about money',
        Answers: [
          { value: 'Always', weights: '-2' },
          { value: 'Mostly', weights: '-1' },
          { value: 'Seldom', weights: '1' },
          { value: 'Never', weights: '2' },
        ],
      },
      {
        Question: 'I talk openly with my partner about money',
        Answers: [
          { value: 'Strongly disagree', weights: '-2' },
          { value: 'Disagree', weights: '-1' },
          { value: 'Agree', weights: '1' },
          { value: 'Strongly agree', weights: '2' },
        ],
      },
      {
        Question:
          "In general, I'm the kind of person who spends more than I earn",
        Answers: [
          { value: 'Strongly agree', weights: '-2' },
          { value: 'Agree', weights: '-1' },
          { value: 'Disagree', weights: '1' },
          { value: 'Strongly disagree', weights: '2' },
        ],
      },
      {
        Question:
          'Consider you will be rewarded with 500,000 MNT tomorrow. For what would you spend?',
        Answers: [
          { value: 'New clothes', weights: '-2' },
          { value: 'Gift for other', weights: '-1' },
          { value: 'Making repairs at home', weights: '1' },
          { value: 'Savings', weights: '2' },
        ],
      },
    ],
  },
];
