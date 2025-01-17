const salonInfo = {
    address:  "1201 S Union Ave Suite 1",
    city: "Tacoma",
    state: 'WA',
    zip: '98405',
    phone: '253-752-6955',
}

// Images
import lindsayRyder from './assets/lindsay-ryder2.webp'
import jackieEpperson from './assets/jackie-epperson.webp'
import cynthia from './assets/cynthia.webp'
import mary from './assets/mary2.webp'
import elizabethJacobson from './assets/elizabethJacobson.webp'
import rachelDrob from './assets/rachelDrob.webp'
import ashleyShin from './assets/ashleyShin.webp'
import crystalCoralles from './assets/crystalCoralles.webp'
import ashleyHendrickson from './assets/ashleyHendrickson.webp'
import gabiTorgerson from './assets/gabiTorgerson.webp'
import sarahLeonard from './assets/sarahLeonard.webp'
import michelleStanzel from './assets/michelleStanzel.webp'


// Stylists
const stylists = [
    {name: 'Lindsay Rider',
    title: 'Stylist/Owner',
    phone: '2532491665', 
    facebook: '', 
    instagram: 'https://www.instagram.com/lindsayrider13/', 
    email: 'msrae13@gmail.com', 
    website: '', 
    image: lindsayRyder, 
    bio: "The talented owner, stylist, and certified balayage artist at Chroma Salon. With over two decades of experience in the industry, Lindsay is a true expert in her field and has a deep passion for helping her clients feel their absolute best. As a leader at Chroma, she takes great pride in providing exceptional service and creating a warm, welcoming atmosphere for all who enter her salon. As a certified L'Oreal Professionnel Balayage artist, Lindsay is known for her impeccable attention to detail and skillful techniques, making her one of the best in the industry. Whether you're looking for a subtle sun-kissed look or a bold, statement-making style, Lindsay will work with you to achieve your desired result. Be sure to ask about her balayage specials - you won't want to miss out on the opportunity to experience her artistry firsthand. So why wait? Visit Chroma Salon today and let Lindsay and her team help you look and feel your best!"
    },
    
    {name: 'Jackie Epperson', 
    title: 'Stylist',
    phone: '2536911799', 
    facebook: '', 
    instagram: 'https://www.instagram.com/jackieepp/', 
    email: 'jackie.epperson@gmail.com', 
    website: '', 
    image: jackieEpperson, 
    bio: "A talented stylist, certified balayage artist and founder of Chroma Salon. While she may no longer be the owner of the salon, her passion for the industry and dedication to her clients remain as strong as ever. As a L'Oreal Professionnel National Artist, Jackie is committed to continuous learning and education, and regularly teaches color, balayage, and styling techniques to salons across the nation. Her wealth of knowledge and experience make her one of the most sought-after stylists in the industry. As a certified L'Oreal Professionnel balayage and color artist, Jackie is skilled at creating the perfect look for each and every client. She is dedicated to delivering an experience that will leave you feeling confident and beautiful inside and out. At Chroma Salon, we value each and every client, and Jackie is here to ensure that your visit is nothing short of perfect."
    },
    
    {name: 'Cynthia Obertubbesing', 
    title: 'Stylist',
    phone: '2532738297', 
    facebook: '', 
    instagram: 'https://www.instagram.com/colourmecyn/', 
    email: 'cynthiaO.hairmakup@gmail.com', 
    website: '', 
    image: cynthia, 
    bio: "Cynthia is a passionate stylist who has been in the industry for almost two decades. Her love for styling hair goes beyond just providing a service; it's an opportunity to express her creativity while building relationships with diverse clients. Based in Tacoma, she specializes in balayage and lived-in hair coloring techniques. Cynthia's talents extend beyond hairstyling as she also offers makeup services for weddings, photoshoots, and other special occasions, often traveling on-site for her clients' convenience. When she's not beautifying clients, Cynthia enjoys spending time outdoors, exploring new places, and trying out new cuisines. Her love for hiking, camping, snowboarding, and paddleboarding keep her active and energized. Cynthia looks forward to bringing her hair magic to your next appointment."
    },

    {name: 'Mary Croswell', 
    title: 'Stylist',
    phone: '7204959509', 
    facebook: '', 
    instagram: 'https://www.instagram.com/mary.Croswell.hair/', 
    email: '', 
    website: '', 
    image: mary, 
    bio: "At Chroma Salon, Mary is a highly skilled colorist and color correction expert with a true passion for creating stunning looks. Whether you're looking for a natural, lived-in look or a bold new hair color, Mary has the skills and experience to help you achieve your hair goals. She's a true artist who takes the time to understand your vision and work with you to create a customized color and cut that's perfect for your unique style. Mary's attention to detail and commitment to using high-quality products ensures that each client leaves the salon feeling confident and beautiful. If you're looking for a master of all things color, Mary is the perfect choice at Chroma Salon."
    },

    {name: 'Elizabeth Jacobson', 
    title: 'Stylist',
    phone: '2069407971', 
    facebook: '', 
    instagram: 'https://www.instagram.com/elizabethanneartistry/', 
    email: '', 
    website: '', 
    image: elizabethJacobson, 
    bio: "‘Hair stylist’ is my second career.  My first career was in dance.  It is an art of form and line, timing and technique (lots of technique).  These facets of dance are present in Hair Design.   Lines are cut; forms and silhouettes are chosen to accent a cheekbone or narrow a jawline. I attended Tint School of Makeup and Cosmetology, where I worked with professional photographers and makeup artists in addition to my hair curriculum.  And for the last eight years, I have enjoyed being a licensed hairstylist. But ‘second career’ doesn’t make it second in my heart.   I love working with curl and wave.   I am certified in the REZO technique and devacut.   Being a person with naturally curly hair (and being an adolescent during the 90’s), I grew up hating my hair.  Helping somebody learn to love their natural texture, is a mission of mine.  Everything in hair is a process, from uncovering a curl pattern to going blonde.  And it is my pleasure to help people through it.  (Hair midwife?...). Beachy, sun kissed balayage is another service I adore.   Balayage is like painting, using the lightener to mimic the angle of the sun and adding shadows to emphasize the light. But one of the things I love about hairstyling is my clients.  We share books, podcasts and  gardening tips (another of my interests). Tacoma is my home.   And my home would be incomplete without my lovely daughter, long suffering boyfriend, and last but not least, Clover and Finnegan our cats. Visit my instagram page to see my work: @elizabethanneartistry"
    },

    {name: 'Rachel Lundman', 
    title: 'Stylist', 
    phone: '2536250636', 
    facebook: '', 
    instagram: `https://www.instagram.com/rachellundmanhair/`, 
    email: '', 
    website: '', 
    image: rachelDrob, 
    bio: "Rachel is a passionate creative stylist who loves to try new techniques and styles. With a career spanning 3 states she’s catered to all kinds of people, culture  and styles across the board. She loves to do creative colors, and challenging color corrections that most stylists turn down. She loves to learn new things and a good challenge! Her specialty is low maintenance and very blended natural highlights. Though she loves all things creative and color,  people are her real love so if you are looking for a caring stylist who aims to please she’s your girl!"
    },
   
    {name: 'Crystal Coralles', 
    title: 'Stylist', 
    phone: '2533891460', 
    facebook: '', 
    instagram: 'https://www.instagram.com/Crystalcoralleshair/', 
    email: 'crystalcoralles@gmail.com', 
    website: 'https://www.crystalcoralles.com', 
    image: crystalCoralles, 
    bio: "Crystal Coralles has been a dedicated stylist since 2006, with a passion for making people feel and look their best. With extensive training from Gene Juarez, as well as advanced training from Tony & Guy and L'Oréal Professionnel, Crystal has a wealth of knowledge in the hair industry. She has had the amazing opportunity to travel across the U.S. to participate in events and advanced training with some of the best in the industry, constantly expanding her skills and learning new techniques. While color and blondes are her specialty, Crystal loves everything about hair and takes pride in creating customized looks that enhance her clients' natural beauty. She takes the time to listen to her clients' needs and preferences, and works with them to achieve their hair goals. Crystal's passion for helping her guests feel amazing about themselves is what sets her apart, making her the perfect choice for anyone looking for a skilled and caring stylist at Chroma Salon."
    },
    {name: 'Ashley Hendrickson', 
    title: 'Stylist', 
    phone: '2066188388', 
    facebook: '', 
    instagram: '', 
    email: '', 
    website: '', 
    image: ashleyHendrickson, 
    bio: "Ashley loves to work with what is naturally there. Give cuts that work with their texture and give the most style that’s attainable for that specific person. I love cutting bangs. I hate to say 'lived in' because it’s such a catchy, used phrase but it is what I strive for. Blended piecey-ness Same goes for color! Natural looking highlights and color.  No balayage. Harsh lines in haircuts & vivid color are not my thing.  And Men's cuts! "
    },
    {name: 'Gabi Torgerson', 
    title: 'Stylist', 
    phone: '2532797044', 
    facebook: '', 
    instagram: 'https://www.instagram.com/hairbygabitorgerson/', 
    email: '', 
    website: '', 
    image: gabiTorgerson, 
    bio: "Gabi is a true rockstar when it comes to creating the perfect lived-in hair look, and her skills as a Certified L'Oreal Professionnel Balayage Artist are unparalleled. Her talent for creating beautiful, natural-looking hair has earned her a loyal following, with clients from all over the PNW seeking her out for their hair needs. Gabi's Instagram page is a testament to her incredible work, showcasing her unique ability to transform her clients' hair into stunning, personalized looks. She brings a level of creativity and artistry to every appointment, and takes pride in working with each client to bring their vision to life. Gabi's passion for hair and commitment to excellence make her an asset to the Chroma Salon team, and her clients appreciate her attention to detail and friendly, approachable demeanor. Whether you're looking for a subtle change or a dramatic transformation, Gabi has the skills and expertise to create the perfect look for you."
    },
    {name: 'Sarah Leonard', 
    title: 'Stylist', 
    phone: '2536869626', 
    facebook: '', 
    instagram: 'https://www.instagram.com/sarahruns_with_scissors/', 
    email: 'Rockstarhair425@gmail.com', 
    website: '', 
    image: sarahLeonard, 
    bio: "Sarah brings over 20 years of experience as a hairstylist to Chroma Salon, and she's a true Tacoma native with a passion for creating beautiful, personalized looks for her clients. Sarah's focus on cutting has led her to specialize in short hair styles, including bobs, pixies, and men's haircuts. Her expertise in these areas is unparalleled, and she loves the opportunity to create bold, edgy looks for her clients. Sarah is also skilled in a range of hair coloring techniques, including foiling, foilyage, and other popular services. Her attention to detail and commitment to quality make her a sought-after stylist at Chroma Salon, and her clients appreciate her friendly, approachable demeanor and her ability to bring their vision to life. Whether you're looking for a dramatic change or a subtle update, Sarah has the skills and expertise to create the perfect look for you."
    },
    {name: 'Michelle Stanzel', 
    title: 'Spray Tan Artist', 
    phone: '2536912252', 
    facebook: '', 
    instagram: '', 
    email: 'michelle_stanzel@yahoo.com', 
    website: 'https://www.raylesstan.com', 
    image: michelleStanzel, 
    bio: "Michelle is a true expert when it comes to airbrush tanning, with over 20 years of experience in the industry. As one of the only custom airbrush tanning artists in the Tacoma area, Michelle has developed a loyal following of clients who appreciate her skill, precision, and attention to detail. Michelle has been an integral part of Chroma Salon since it opened its doors in May 2010, and she loves the opportunity to work alongside her amazing coworkers and serve her clients every day. Michelle's passion for airbrush tanning is evident in everything she does, and she takes great pride in helping her clients achieve the perfect, natural-looking glow they desire. Whether you're getting ready for a special occasion or just want to feel confident and beautiful, Michelle is the go-to expert for all your airbrush tanning needs at Chroma Salon."
    },

   
]



export {
    salonInfo,
    stylists
}