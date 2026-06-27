export interface Question {
  id: string;
  text: string;
}

export interface Section {
  id: string;
  title: string;
  questions: Question[];
}

export const sections: Section[] = [
  {
    id: "comparison",
    title: "Comparison-Driven Living",
    questions: [
      { id: "comparison_1", text: "I find myself measuring my progress against others." },
      { id: "comparison_2", text: "Seeing someone else's success makes me feel behind." },
      { id: "comparison_3", text: "I check how I'm doing compared to people my age." },
      { id: "comparison_4", text: "My mood shifts based on how I compare to others online." },
    ],
  },
  {
    id: "identity",
    title: "Identity",
    questions: [
      { id: "identity_1", text: "I struggle to describe who I am without referencing my achievements." },
      { id: "identity_2", text: "My sense of self changes depending on who I'm around." },
      { id: "identity_3", text: "I feel lost when I'm not working toward a goal." },
      { id: "identity_4", text: "I define myself mostly by my role (job, title, etc.)." },
    ],
  },
  {
    id: "criticism",
    title: "Overreaction to Criticism",
    questions: [
      { id: "criticism_1", text: "Criticism affects my mood for the rest of the day." },
      { id: "criticism_2", text: "I replay critical comments in my head long after they're said." },
      { id: "criticism_3", text: "I get defensive even when feedback is meant to help." },
      { id: "criticism_4", text: "A single negative comment can outweigh many positive ones." },
    ],
  },
  {
    id: "performance",
    title: "Performance Addiction",
    questions: [
      { id: "performance_1", text: "I feel guilty when I'm not being productive." },
      { id: "performance_2", text: "Rest feels like I'm falling behind." },
      { id: "performance_3", text: "I tie my worth to how much I accomplish in a day." },
      { id: "performance_4", text: "I find it hard to celebrate wins without immediately chasing the next one." },
    ],
  },
  {
    id: "image",
    title: "Image Management",
    questions: [
      { id: "image_1", text: "I curate how others see me, even with close friends." },
      { id: "image_2", text: "I avoid situations where I might look unprepared or weak." },
      { id: "image_3", text: "I think carefully about how a post or message will be perceived." },
      { id: "image_4", text: "I feel anxious when people see an unfiltered version of me." },
    ],
  },
  {
    id: "jealousy",
    title: "Jealousy / Silent Competition",
    questions: [
      { id: "jealousy_1", text: "I feel a quiet competitiveness with people close to me." },
      { id: "jealousy_2", text: "Someone else's win can feel like my loss." },
      { id: "jealousy_3", text: "I downplay others' achievements in my head." },
      { id: "jealousy_4", text: "I feel a pang of envy I don't say out loud." },
    ],
  },
];

export const scaleLabels = [
  { value: 1, label: "Never true" },
  { value: 2, label: "Rarely true" },
  { value: 3, label: "Sometimes" },
  { value: 4, label: "Often true" },
  { value: 5, label: "Very true" },
];