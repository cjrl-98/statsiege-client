export default function BurgerStyle (){
     return (
          <style jsx global>{`
               .burger-wrapper nav {
                    width: 3000px
               }
               .burger-wrapper .background {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 300px;
                    background: #000000;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
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
                    top: 14px;
                    right: 15px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: transparent;
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
                    width: 36px;
                    height: 36px;
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