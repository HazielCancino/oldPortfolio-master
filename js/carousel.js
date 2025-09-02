$(window).on("load", function() {
  function isMobile(){
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm(os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|hedge|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp(i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt(|\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|\-[aw])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v)|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-|)|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)))
}

//console.log("hello", isMobile())

if (!ismobile())
{


  gsap.registerPlugin(ScrollTrigger)


    //Selection of necessary elements
    var boxes = $(".box"),
      internship = $(".stage"), 
      demo =$(".demoWrapper")
  
    //Configuring the scene using TweenLite
    TweenLite.set(stage, {
      css: {
        perspective: 800, //Sets the perspective of the 3D scene
        transformStyle: "preserve-3d" //Defines the 3D transformation style
      }
    });
  
    var rotations = []; //Variable to store current rotations
    var tweenClc = '';





 // ======================================
//Animation of the rotation of the boxes without touching them + acceleration with scroll (ScrollTrigger)
// ======================================

    boxes.each(function(index, element) {


    
      TweenLite.set(element, {
        css: {
          rotationY: (index * 360 /5)+72, //Sets the horizontal rotation in degrees for each box
          transformOrigin: "50% 50% -350" //Defines the origin of 3D transformation
        }
      });
  

  
      rotations[index] = index * 360 /5; //Records the initial rotation
      //console.log('rotation[index]=', rotations[index])
  
      var box1 = $("#box-1");
      var previousProgress = 0; //Stores the previous value of self.progress to know if the scroll is down or up
      var currentRotationBox = [];

  
      ScrollTrigger.create({
        trigger: box1, //Trigger for animation
        start: "top 95%", //Starting point of the animation when the top of box1 reaches 95% of the window (it starts from the top)
        end: "bottom+=1000 5%", //End point of the animation when the bottom of the element reaches 5% of the window
        //markers: true,
  
        onUpdate: function(self) {//Update function while scrolling
          var progress = self.progress; //Recovers scroll progress (0 - 1)
          //console.log(progress)
  
          //Determines whether scrolling occurs up or down
          var scrollDirection = progress > previousProgress? "down": "up";
          previousProgress = progress; //Updates the previous value of self.progress
          //console.log('scrolldir=', scrollDirection)
  
          //Calculates the rotation speed based on the progress of the scroll
          var rotationSpeed = progress; //For example, 1 + (0 * 4) = 1 (normal speed), 1 + (1 * 4) = 5 (accelerated speed)
  
          //acceleration of boxes with scrolling
          //TweenLite.to(element, 15, {
          //   css: {
          //     rotationY: (scrollDirection === "up"? "+=": "-=") + (360 *1.5) //Animates the horizontal rotation with the calculated speed
          //   },
          //   ease: Linear.easeInOut 
          // });
  
          //Updates the current rotation based on scroll progress
          var currentRotation = rotations[index] + (360 * rotationSpeed);
          //console.log('currentrot[]=', currentRotation)
            
            //basic rotation of boxes (infinite rotation)
            TweenLite.to(element,60,{
              css: {
                z: 0.01, //Sets the depth of each box
                rotationY: (scrollDirection === "down"? currentRotation - 1000: currentRotation + 500) //Animates the horizontal rotation of each box
              },
              repeat: -1, //Infinite repetition of the animation
              ease: Linear.easeNone, //Linear animation without acceleration
            });


        // ======================================
        //animation of the boxes so that it moves from tornado to carousel
        // ======================================


          //Data table for each box
          var boxData = [
            {id: "#box-1", y: 885},
            {id: "#box-2", y: 665},
            {id: "#box-3", y: 445},
            {id: "#box-4", y: 225}
          ];

          //Using a loop to create animations for each box
    

         
        for (var i = 0; i < boxData.length; i++) {
          var data = boxData[i];

          gsap.to(data.id, {
            scrolltrigger: {
              trigger: "#box-1", //Uses the specific ID of each box as a trigger
              start: "top 40%",
              end: "top 25%",
              scrub: 2,
              //ounce: true,
              toggleAction: "play none none reverse"
            },
            y: data.y,
            ease: "none"
          });
        }  
        
        }
      });
    });








// ======================================
//moving the carousel by clicking either to the right or left of the stage scene
// ======================================

  cursorcontainers = document.querySelectorAll('.wrapperCursor');


  
  var isAnimating = false; //Variable to track animation status



  
  cursorcontainers.forEach(cursorContainer => {
    cursorContainer.addEventListener("mouseenter", ()=> {
      replaceCursorWithSVG('images/arrow-right.png', 'images/arrow-left.png');
  
      cursorcontainer.style.cursor="none";
      console.log('hovvver');
    });
  
    cursorContainer.addEventListener("mouseleave", ()=> {
      deletecursor();
    });




      cursorContainer.addEventListener("click", function(event) {

        if (isAnimating) {
          return; //If the animation is in progress, ignore the click
        }
    
        console.log('click on wrapper!');
        const x = event.clientX;
        const midScreen = window.innerWidth /2;
    
    
        var box1 = document.querySelector("#box-1");
        var prepreprerotationY = box1.style.transform;
        //var rotationY = Math.abs(((rotationNumber(prerotationY));
        var preprerotationY = parseFloat(rotationNumber(prepreprerotationY));
        var prerotationY = prerotationY.toFixed(0);
        var rotationY = prerotationY%72;
    
    
    
    
        //i'm solving the problem of aligning the boxes in degrees, otherwise almost everything works perfectly!! 
        console.log('absolute value of the degree of box 1 modulo 72 rounded:', rotationY);
    
    
        if (x > midScreen) {
          currentRotation = -rotationY; //Updates the current rotation to a right rotation
          if (currentRotation == 0){
            currentrotation = -72;
          }
          console.log('moving to the right', currentRotation);
        } else {
          currentRotation = ((72 - rotationY)%72);//Updates the current rotation to a left rotation
          if (currentRotation == 0){
            currentrotation = 72;
          }
          console.log('move left', currentRotation);
        }
    
        isAnimating = true; //Set animation state to true
    
    
        boxes.each(function(index, element) {
          rotations[index] = index * 360 /5; //Records the initial rotation
    
    
          TweenLite.killTweensOf(element, false, {rotationY: true});
    
          TweenLite.to(element, 1,{
            css: {
              rotationY: "+=" + currentRotation  //Uses the current rotation as a starting point for animation
            },
            ease: Power1.easeInOut, //Interpolation function for animation
            onComplete: function(){
              isAnimating = false; //The animation is finished, restore the animation state to false
            }
          });
    
    
        });
    
      });
    
  });

  
  
  cursorcontainersleft = document.querySelector('#wrapperCursor-left');
  cursorcontainersRight = document.querySelector('#wrapperCursor-right');
  arrowleft = document.querySelector('#arrow-left');
  arrowright = document.querySelector('#arrow-right');

  cursorcontainersleft.addEventListener("mouseenter", ()=>{
    arrowleft.style.display= 'none';
  });

  cursorcontainersright.addEventListener("mouseenter", ()=>{
    arrowright.style.display= 'none';
  
  }); 
  
  cursorcontainersleft.addEventListener("mouseleave", ()=>{
    arrowleft.style.display = 'block';
  });
  
  cursorcontainersright.addEventListener("mouseleave", ()=>{
    arrowright.style.display = 'block';
  
  });

  



  

// ======================================
//function which returns the rotation Y of box 1
// ======================================

  function rotationNumber(transform) {
    //Search for the position of "rotate(" in the transformation chain
    var rotateIndex = transform.indexOf("rotateY(");
      //Extract the part of the chain after "rotate("
    var rotationPart = transform.slice(rotateIndex+8);

    
    //Find the position of the closing parenthesis ")"
    var closingParenthesisIndex = rotationPart.indexOf("deg");

    var currentRotation = rotationPart.slice(0, closingParenthesisIndex);
    console.log('currentRotation=', currentRotation)
      
    return currentRotation;
     
  }

  
  
  
  
  
  
// ======================================
//To change the 3d perspective of the tweenlite scene when the boxes are in carousel mode
// ======================================

  var stage = document.querySelector('.stage')
  gsap.to(internship, {
    scrolltrigger: {
      trigger: "#box-5",
      start: "top 60%",
      end: "bottom 30%",
      //scrub: 1,
      //markers:true,
      toggleAction: "play none play none"
    },
    css: {
      "perspective": "+=10000",
    },
    duration: 2,
    ease: Power1.easeInOut,
  });






  // ======================================
//changing the mouse to arrow depending on whether left or right
// ======================================


  function deleteCursor(){
    var cursor = document.getElementById('cursor-container');
    cursor.remove();  

  }


  function replaceCursorWithSVG(svgRight, svgLeft) {

    wrappercursor = document.querySelector('.wrapperCursor');
    //Create the container for the cursor SVG
    const cursorContainer = document.createElement('div');
    cursorcontainer.setattribute('id', 'cursor-container');
    cursorcontainer.style.position = 'absolute';
    cursorcontainer.style.pointEvents= 'none';
    wrappercursor.appendchild(cursorContainer);
  
    //Create the element <img> for the SVG of the right cursor
    const cursorRight = document.createElement('img');
    cursorright.setAttribute('src', svgRight);
    cursorright.style.display= 'none';
    cursorright.style.transition = "all .5s ease-in"

    cursorcontainer.appendchild(cursorRight);
  
    //Create element <img> for left cursor SVG
    const cursorLeft = document.createElement('img');
    cursorleft.setattribute('src', svgLeft);
    cursorleft.style.display= 'none';
    cursorleft.style.transition = "all .5s ease-in"
    cursorcontainer.appendchild(cursorLeft);
  
    //Add an event listener to detect mouse movements
    document.addEventListener('mousemove', function(event) {
      const x = event.clientX;
      const y = event.clientY;
      const midScreen = window.innerWidth /2;
      cursorcontainer.style.top = y  - 100 + 'px';
      //cursorContainer.style.transform = ºCtranslateY(${y-120}px)ʼ;




  
      //Show the right cursor SVG if the mouse is on the right of the screen
      if (x > midScreen) {
        cursorright.style.display='block';
        cursorleft.style.display= 'none';
        cursorcontainer.style.left = x + 'px';
        //console.log('right')
      }
      //Show the left cursor SVG if the mouse is on the left of the screen
      else {
        cursorright.style.display= 'none';
        cursorleft.style.display = 'block';
        cursorcontainer.style.left = x + 'px';
      }
    });


  }

// ========================================
  //reverse scroll when carousel mode
// ========================================










    








};

});
  


