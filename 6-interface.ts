// Interface

// Building an Interface

interface Book {
  title: string;
  daysOld: number;
  published: boolean;
}

const post = {
  title: '28 Days in Typescript',
  daysOld: 34,
  published: true
}


const printPost = (postToPrint: Book) => {
  return `${postToPrint.title} / ${postToPrint.daysOld} / ${postToPrint.published}`;
}

console.log(printPost(post));