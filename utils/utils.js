import parse from "html-react-parser";

const find = [
  /(?:\r\n|\r|\n)/g,
  /\[h3\](.*?)\[\/h3\]/gi,
  /\[h4\](.*?)\[\/h4\]/gi,
  /\[list\](.*?)\[\/list\]/gi,
  /\[item\](.*?)\[\/item\]/gi,
  /\[enter\]/gi,
];
const replace = [
  ``,
  `<h3 style="font-size:28px;font-weight:700;color:#48bb78;padding-top:10px">$1</h3>`,
  `<h4 style="font-size:20px;font-weight:700;color:#2b6cb0;padding-top:5px">$1</h4>`,
  `<ul style="margin-bottom: 1rem;padding-left:40px">$1</ul>`,
  `<li>$1</li>`,
  `<br /><br />`,
];

export const formatText = (content) => {
  if (!content) return;

  find.forEach((element, index) => {
    content = content.replace(element, replace[index]);
  });

  return parse(content);
};
