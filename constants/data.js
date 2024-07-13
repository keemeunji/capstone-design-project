import happy from '../assets/images/emotion/happy.png';
import confused from '../assets/images/emotion/confused.png';
import grinning from '../assets/images/emotion/grinning.png';
import confusing from '../assets/images/emotion/confusing.png';

export const CORE_CONCEPTS = [
  {
    image: happy,
    title: '기쁨',
    description:
      'Happy',
  },
  {
    image: confused,
    title: '슬픔',
    description:
      'Sad',
  },
  {
    image: grinning,
    title: '분노',
    description:
      'Angry',
  },
  {
    image: confusing,
    title: '우울',
    description:
      '',
  },
  {
    image: confusing,
    title: '공포',
    description:
      '',
  },
  {
    image: confusing,
    title: '놀람',
    description:
      '',
  },
];

export const EXAMPLES = {
  components: {
    title: '기쁨',
    // description:
    //   'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: '슬픔',
    // description:
    //   'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: '화남',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: '우울',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};