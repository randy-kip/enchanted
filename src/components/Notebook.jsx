// src/components/Notebook.jsx
import { useEffect } from 'react';
import '../styles/Notebook.css';
import { useNavigate } from 'react-router-dom'; 

const Notebook = () => {
  const navigate = useNavigate();

    const handleHeartClick = () => {
        navigate('/invite');
    };

  useEffect(() => {
    let highestZ = 1;

    class Paper {
        holdingPaper = false;
        mouseTouchX = 0;
        mouseTouchY = 0;
        mouseX = 0;
        mouseY = 0;
        prevMouseX = 0;
        prevMouseY = 0;
        velX = 0;
        velY = 0;
        rotation = Math.random() * 30 - 15;
        currentPaperX = 0;
        currentPaperY = 0;
        rotating = false;
      
        init(paper) {
          document.addEventListener('mousemove', (e) => {
            if(!this.rotating) {
              this.mouseX = e.clientX;
              this.mouseY = e.clientY;
              
              this.velX = this.mouseX - this.prevMouseX;
              this.velY = this.mouseY - this.prevMouseY;
            }
              
            const dirX = e.clientX - this.mouseTouchX;
            const dirY = e.clientY - this.mouseTouchY;
            const dirLength = Math.sqrt(dirX*dirX+dirY*dirY);
            const dirNormalizedX = dirX / dirLength;
            const dirNormalizedY = dirY / dirLength;
      
            const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
            let degrees = 180 * angle / Math.PI;
            degrees = (360 + Math.round(degrees)) % 360;
            if(this.rotating) {
              this.rotation = degrees;
            }
      
            if(this.holdingPaper) {
              if(!this.rotating) {
                this.currentPaperX += this.velX;
                this.currentPaperY += this.velY;
              }
              this.prevMouseX = this.mouseX;
              this.prevMouseY = this.mouseY;
      
              paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
            }
          })
      
          paper.addEventListener('mousedown', (e) => {
            if(this.holdingPaper) return; 
            this.holdingPaper = true;
            
            paper.style.zIndex = highestZ;
            highestZ += 1;
            
            if(e.button === 0) {
              this.mouseTouchX = this.mouseX;
              this.mouseTouchY = this.mouseY;
              this.prevMouseX = this.mouseX;
              this.prevMouseY = this.mouseY;
            }
            if(e.button === 2) {
              this.rotating = true;
            }
          });
          window.addEventListener('mouseup', () => {
            this.holdingPaper = false;
            this.rotating = false;
          });
        }
      }

    const papers = Array.from(document.querySelectorAll('.paper'));

    papers.forEach((paper) => {
      const p = new Paper();
      p.init(paper);
    });
  }, []);

  return (
    <div>
      <div className="paper heart" onClick={handleHeartClick}>
        <p className="heart-message">Ready for more?</p>
      </div>
      <div className="paper image">
        <p>I mean...</p>
        <p>Just look at us! 😍</p>
        <img src="src\assets\images\us-close-up.jpg" alt="1" />
      </div>
      <div className="paper image">
        <img src="src\assets\images\cake.jpg" alt="2" />
      </div>
      <div className="paper image">
        <p>How can one person be</p>
        <p>so incredibly cute ❤️</p>
        <img src="src\assets\images\anim.gif" alt="3" />
      </div>
      <div className="paper red">
        <p className="p1">and my absolute</p>
        <p className="p2">favorite Person 😍</p>
      </div>
      <div className="paper">
        <p className="p1">You are everything</p>
        <p className="p1">I have ever wanted <span style={{ color: 'red' }}>❤️</span></p>
      </div>
      <div className="paper">
        <p className="p1">Drag the papers to move!</p>
      </div>
    </div>
  );
};

export default Notebook;