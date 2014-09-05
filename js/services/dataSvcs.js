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
    		blog: "",
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
