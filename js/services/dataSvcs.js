angular.module("ironBookApp.services")

  .factory("dataSvcs", function() {

    var studentData = [
    	{
    		name: "Ryan Huber",
        type: "Front End Engineer",
    		img: "https://avatars2.githubusercontent.com/u/8245890?v=2&s=460",
    		ghUser: "rphuber",
    		ghPage: "https://github.com/rphuber",
    		tHandle: "@fenwaycheese",
    		tPage: "",
    		blog: "",
    		ironyardLocation: "Charleston",
    		about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, labore quibusdam. Blanditiis vero iusto quasi perspiciatis commodi eaque, quisquam enim libero perferendis error? Asperiores aut, quaerat saepe modi voluptate, dignissimos.",
    		loc: {
    			long: null,
    			lat: null
    		}
    	},
    	{
    		name: "Brendan Quinn",
        type: "Front End Engineer",
    		img: "https://avatars0.githubusercontent.com/u/6947446?v=2&s=400",
    		ghUser: "Mathdrquinn",
    		ghPage: "https://github.com/Mathdrquinn",
    		tHandle: "@MathDrQuinn",
    		tPage: "",
    		blog: "http://mathdrquinn.wordpress.com/",
    		ironyardLocation: "Charleston",
    		about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium animi, ex repudiandae repellendus fuga libero consectetur labore, deserunt atque eum officia nemo aut. Repellendus atque iste veniam, necessitatibus tempora a.",
    		loc: {
    			long: null,
    			lat: null
    		}
    	},
    	{
    		name: "Cory Figueroa",
        type: "Front End Engineer",
    		img: "https://avatars0.githubusercontent.com/u/8238249?v=2&s=400",
    		ghUser: "CTFigueroa",
    		ghPage: "https://github.com/CTFigueroa",
    		tHandle: "@FigueroaCory",
    		tPage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia commodi eveniet eligendi eum alias veniam consequatur, nihil maiores dolore expedita quasi. Esse numquam cumque sunt accusantium, nobis, harum expedita officiis!",
    		blog: "",
    		ironyardLocation: "Charleston",
    		about: "",
    		loc: {
    			long: null,
    			lat: null
    		}
    	},
    	{
    		name: "Will Gallop",
        type: "Front End Engineer",
    		img: "https://avatars2.githubusercontent.com/u/7799207?v=2&s=400",
    		ghUser: "wgallop99",
    		ghPage: "https://github.com/wgallop99",
    		email: "wgallop99@gmail.com",
    		tHandle: "@galloping",
    		tPage: "",
    		blog: "",
    		ironyardLocation: "Charleston",
    		about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, perferendis blanditiis nulla, nostrum sequi eveniet libero temporibus non! Dolor soluta similique repudiandae, facere dolorum magnam nobis perspiciatis voluptates, eveniet porro.",
    		loc: {
    			long: null,
    			lat: null
    		}
    	},
    	{
        name: "Charles Nguyen",
        type: "Front End Engineer",
        img: "https://avatars2.githubusercontent.com/u/8241367?v=2&s=400",
        ghUser: "lapty",
        ghPage: "https://github.com/lapty",
        email: "charles.qh.nguyen@gmail.com",
        tHandle: "@fortheNguyen",
        tPage: "",
        blog: "",
        ironyardLocation: "Charleston",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit vero pariatur beatae asperiores. Ipsam reprehenderit consequuntur quaerat, pariatur aspernatur aut minus maxime harum voluptates, neque, fugiat. Accusamus harum obcaecati quos.",
        loc: {
          long: null,
          lat: null
        }
      },
      {
        name: "Andrew Levy",
        type: "Front End Engineer",
        img: "https://avatars2.githubusercontent.com/u/8238273?v=2&s=460",
        ghUser: "aelevy44",
        ghPage: "https://github.com/aelevy44",
        email: null,
        tHandle: null,
        tPage: "",
        blog: "",
        ironyardLocation: "Charleston",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit vero pariatur beatae asperiores. Ipsam reprehenderit consequuntur quaerat, pariatur aspernatur aut minus maxime harum voluptates, neque, fugiat. Accusamus harum obcaecati quos.",
        loc: {
          long: null,
          lat: null
        }
      },
      {
        name: "Ansley Jones",
        type: "Front End Engineer",
        img: "https://avatars2.githubusercontent.com/u/8247044?v=2&s=460",
        ghUser: "ansleyjones",
        ghPage: "https://github.com/ansleyjones",
        email: null,
        tHandle: null,
        tPage: null,
        blog: "",
        ironyardLocation: "Charleston",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit vero pariatur beatae asperiores. Ipsam reprehenderit consequuntur quaerat, pariatur aspernatur aut minus maxime harum voluptates, neque, fugiat. Accusamus harum obcaecati quos.",
        loc: {
          long: null,
          lat: null
        }
      },
      {
        name: "Natalie Miller",
        type: "Front End Engineer",
        img: "https://avatars3.githubusercontent.com/u/8239005?v=2&s=460",
        ghUser: "natalie03",
        ghPage: "https://github.com/natalie03",
        email: null,
        tHandle: null,
        tPage: null,
        blog: "",
        ironyardLocation: "Charleston",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit vero pariatur beatae asperiores. Ipsam reprehenderit consequuntur quaerat, pariatur aspernatur aut minus maxime harum voluptates, neque, fugiat. Accusamus harum obcaecati quos.",
        loc: {
          long: null,
          lat: null
        }
      },
      {
        name: "Margaret Godowns",
        type: "Front End Engineer",
        img: "https://avatars2.githubusercontent.com/u/8241756?v=2&s=460",
        ghUser: "margaretgodowns",
        ghPage: "https://github.com/margaretgodowns",
        email: "margaretgodowns@gmail.com",
        tHandle: "@margaretgodowns",
        tPage: "https://twitter.com/margaretgodowns",
        blog: "",
        ironyardLocation: "Charleston",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit vero pariatur beatae asperiores. Ipsam reprehenderit consequuntur quaerat, pariatur aspernatur aut minus maxime harum voluptates, neque, fugiat. Accusamus harum obcaecati quos.",
        loc: {
          long: null,
          lat: null
        }
      },
      {
        name: "Liz Kline",
        type: "Front End Engineer",
        img: "https://avatars3.githubusercontent.com/u/8246964?v=2&s=460",
        ghUser: "lizkline91",
        ghPage: "https://github.com/lizkline91",
        email: "lizkline91@gmail.com",
        tHandle: null,
        tPage: null,
        blog: "",
        ironyardLocation: "Charleston",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit vero pariatur beatae asperiores. Ipsam reprehenderit consequuntur quaerat, pariatur aspernatur aut minus maxime harum voluptates, neque, fugiat. Accusamus harum obcaecati quos.",
        loc: {
          long: null,
          lat: null
        }
      },
      {
        name: "Chinenyem Nwadiugu",
        type: "Front End Engineer",
        img: "https://avatars2.githubusercontent.com/u/8246149?v=2&s=460",
        ghUser: "chinenyem",
        ghPage: "https://github.com/chinenyem",
        email: null,
        tHandle: null,
        tPage: null,
        blog: "",
        ironyardLocation: "Charleston",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit vero pariatur beatae asperiores. Ipsam reprehenderit consequuntur quaerat, pariatur aspernatur aut minus maxime harum voluptates, neque, fugiat. Accusamus harum obcaecati quos.",
        loc: {
          long: null,
          lat: null
        }
      },
      {
        name: "Chris Otten",
        type: "Front End Engineer",
        img: "https://avatars3.githubusercontent.com/u/8238886?v=2&s=460",
        ghUser: "crotten",
        ghPage: "https://github.com/crotten",
        email: "Christopher.R.Otten@gmail.com",
        tHandle: "@ChristopheOtten",
        tPage: "https://twitter.com/ChristopheOtten",
        blog: "",
        ironyardLocation: "Charleston",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit vero pariatur beatae asperiores. Ipsam reprehenderit consequuntur quaerat, pariatur aspernatur aut minus maxime harum voluptates, neque, fugiat. Accusamus harum obcaecati quos.",
        loc: {
          long: null,
          lat: null
        }
      },
      {
        name: "Andrew Raynal",
        type: "Staff",
        img: "https://avatars1.githubusercontent.com/u/7121310?v=2&s=460",
        ghUser: "andrewraynal",
        ghPage: "https://github.com/andrewraynal",
        email: "idk@theironyard.com",
        tHandle: "@andrewraynal",
        tPage: "https://twitter.com/andrewraynal",
        blog: "",
        ironyardLocation: "Charleston",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit vero pariatur beatae asperiores. Ipsam reprehenderit consequuntur quaerat, pariatur aspernatur aut minus maxime harum voluptates, neque, fugiat. Accusamus harum obcaecati quos.",
        loc: {
          long: null,
          lat: null
        }
      },
      {
        name: "Calvin Webster",
        type: "Staff",
        img: "https://avatars0.githubusercontent.com/u/115030?v=2&s=460",
        ghUser: "calweb",
        ghPage: "https://github.com/calweb",
        email: "calvin@theironyard.com",
        tHandle: "@calweb",
        tPage: "https://twitter.com/calweb",
        blog: "",
        ironyardLocation: "Charleston",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit vero pariatur beatae asperiores. Ipsam reprehenderit consequuntur quaerat, pariatur aspernatur aut minus maxime harum voluptates, neque, fugiat. Accusamus harum obcaecati quos.",
        loc: {
          long: null,
          lat: null
        }
      }




    ];

    return {

      studentData:studentData

    }

  });
