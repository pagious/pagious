import { Router } from 'express'

const router = Router()

// Mock Posts
const posts = [
  {
    id     : 1,
    title  : 'Why SQL is beating NoSQL, and what this means for the future of data',
    content: 'Since the dawn of computing, we have been collecting exponentially growing amounts of data, constantly asking more from our data storage, processing, and analysis technology. In the past decade, this caused software developers to cast aside SQL as a relic that couldn’t scale with these growing data volumes, leading to the rise of NoSQL: MapReduce and Bigtable, Cassandra, MongoDB, and more.\n' +
    'Yet today SQL is resurging. All of the major cloud providers now offer popular managed relational database services: e.g., Amazon RDS, Google Cloud SQL, Azure Database for PostgreSQL (Azure launched just this year). In Amazon’s own words, its PostgreSQL- and MySQL-compatible database Aurora database product has been the “fastest growing service in the history of AWS”. SQL interfaces on top of Hadoop and Spark continue to thrive. And just last month, Kafka launched SQL support. Your humble authors themselves are developers of a new time-series database that fully embraces SQL.\n' +
    'In this post we examine why the pendulum today is swinging back to SQL, and what this means for the future of the data engineering and analysis community.'
  },
  {
    id     : 2,
    title  : 'Greater than the sum of its parts',
    header : 'It is rare for a new animal species to emerge in front of scientists’ eyes. But this seems to be happening in eastern North America',
    content: 'Like some people who might rather not admit it, wolves faced with a scarcity of potential sexual partners are not beneath lowering their standards. It was desperation of this sort, biologists reckon, that led dwindling wolf populations in southern Ontario to begin, a century or two ago, breeding widely with dogs and coyotes. The clearance of forests for farming, together with the deliberate persecution which wolves often suffer at the hand of man, had made life tough for the species. That same forest clearance, though, both permitted coyotes to spread from their prairie homeland into areas hitherto exclusively lupine, and brought the dogs that accompanied the farmers into the mix.\n' +
    'Interbreeding between animal species usually leads to offspring less vigorous than either parent — if they survive at all. But the combination of wolf, coyote and dog DNA that resulted from this reproductive necessity generated an exception. The consequence has been booming numbers of an extraordinarily fit new animal (see picture) spreading through the eastern part of North America. Some call this creature the eastern coyote. Others, though, have dubbed it the “coywolf”. Whatever name it goes by, Roland Kays of North Carolina State University, in Raleigh, reckons it now numbers in the millions.\n' +
    'The mixing of genes that has created the coywolf has been more rapid, pervasive and transformational than many once thought. Javier Monzón, who worked until recently at Stony Brook University in New York state (he is now at Pepperdine University, in California) studied the genetic make-up of 437 of the animals, in ten north-eastern states plus Ontario. He worked out that, though coyote DNA dominates, a tenth of the average coywolf’s genetic material is dog and a quarter is wolf.\n' +
    'The DNA from both wolves and dogs (the latter mostly large breeds, like Doberman Pinschers and German Shepherds), brings big advantages, says Dr Kays. At 25kg or more, many coywolves have twice the heft of purebred coyotes. With larger jaws, more muscle and faster legs, individual coywolves can take down small deer. A pack of them can even kill a moose.\n' +
    'Coyotes dislike hunting in forests. Wolves prefer it. Interbreeding has produced an animal skilled at catching prey in both open terrain and densely wooded areas, says Dr Kays. And even their cries blend those of their ancestors. The first part of a howl resembles a wolf’s (with a deep pitch), but this then turns into a higher-pitched, coyote-like yipping.\n' +
    'The animal’s range has encompassed America’s entire north-east, urban areas included, for at least a decade, and is continuing to expand in the south-east following coywolves’ arrival there half a century ago. This is astonishing. Purebred coyotes never managed to establish themselves east of the prairies. Wolves were killed off in eastern forests long ago. But by combining their DNA, the two have given rise to an animal that is able to spread into a vast and otherwise uninhabitable territory. Indeed, coywolves are now living even in large cities, like Boston, Washington and New York. According to Chris Nagy of the Gotham Coyote Project, which studies them in New York, the Big Apple already has about 20, and numbers are rising.'
  },
  {
    id       : 3,
    title    : 'Five Essential Tips for Pursuing Your Passion',
    'content': 'This past year, I embarked on two entrepreneurial endeavors: I started a product consulting business and published a magazine that celebrates Asian American identity. While venturing off on my own may have seemed like a leap of faith, I was confident in my choices. For the first time, I feel like I’m actually living an authentic life, and it’s making me dazzlingly happy.\n' +
    'I reflected on my biggest lessons learned on this journey and wanted to share them in hopes that you, too, can use them to go after something that makes you dazzlingly happy. Even if you’re not actively pursuing a side-hustle, these tips have helped me be more self-assured, make better choices, and overcome adversity. Here we go!'
  }
]

/* GET users listing. */
router.get('/posts', function (req, res, next) {
  res.json(posts)
})

/* GET user by ID. */
router.get('/posts/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0) {
    var post = posts.find(x => x.id == id)
    if (!post) {
      res.sendStatus(404)
    }
    else {
      res.json(post)
    }
  } else {
    res.sendStatus(404)
  }
})

export default router
