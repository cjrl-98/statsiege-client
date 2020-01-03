export default function BurgerStyle (){
     return (
          <style jsx global>{`
               .burger-wrapper nav {
                    width: 300px
               }

               .burger-wrapper .background {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 300px;
                    background: #000000;
                    z-index: 9999;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
               }

               .burger-wrapper button {
                    position: fixed;
                    outline: none;
                    border: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    cursor: pointer;
                    position: absolute;
                    top: 18px;
                    right: 15px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: transparent;
                    z-index: 9999;
               }

               .burger-wrapper ul {
                    padding: 25px;
                    position: absolute;
                    top: 100px;
                    width: 280px;
               }

               .burger-wrapper li {
                    list-style: none;
                    margin-bottom: 25px;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    color: #FFFFFF;
               }

               .burger-wrapper .icon-placeholder {
                    width: 40px;
                    height: 40px;
                    margin-right: 20px;
               }

               .burger-wrapper .text-placeholder {
                    border-radius: 5px;
                    width: 200px;
                    padding: 8px;
                    flex: 1;
               }
          `}</style>
     );
}