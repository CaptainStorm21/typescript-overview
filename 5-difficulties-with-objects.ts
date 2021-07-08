// Difficulties with Objects

const post: {
  title: string,
  daysOld: number,
  published: boolean
} = {
  title: '28 Days in Typescript',
  daysOld: 34,
  published: true
}


const printPost = (postToPrint: {
  title: string,
  daysOld: number
}) => {
  return `${postToPrint.title} / ${postToPrint.daysOld}`;
}

// we need interface because this synthanx is ridiculously long