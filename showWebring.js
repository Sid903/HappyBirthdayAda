             var nameSelfWebring = "Flonne";
             var relationshipSelfWebring = "is literally, actually dating";
             var charnameSelfWebring = "Sans";
             var seriesSelfWebring = "Undertale";
             var imgurlSelfWebring = "https://vivarism.neocities.org/Assets/Web/sans_icon.png";

             var templateWebring = document.createElement("selfinsertwebring");
             templateWebring.innerHTML = "<style>.my-font {font-family: var(--body-font);} #templateWebring a {color: #D08100; font-weight:bold;} #templateWebring a:hover, #templateWebring a:focus{font-weight:bold; color:#B85C00;}  #templateWebring {width:20vw; box-sizing: border-box; padding: 1ch; font-size: 1.1vw; text-shadow: var(--literal-text-shadow); font-family: 'MS PGothic', var(--body-font); font-weight:bold; text-align:center; height:auto; border:0.25vw solid #D19A4F; border-radius: 0.25vw; background-image:url('https://vivarism.neocities.org/Assets/Web/sibg.png'); background-size:cover; display: grid; grid-template-areas: 'icon desc' 'link link'; gap: 1ch; align-items: center; justify-content: center; grid-template-columns:33% 1fr; grid-template-rows: 1fr 33%;} #iconWebring {grid-area:icon; border:0.2vw solid #D19A4F; border-radius: 0.25vw; display:block; box-sizing:border-box; object-fit: cover; height: 100%; width: 100%; box-shadow: 0.07vw 0.07vw 0.05vw hsl(35deg 52% 32% / 0.4);} #webringdescbox {grid-area: desc; font-size: 1.05em; display: flex; align-items: center; justify-content: center; height:100%; box-sizing:border-box; border:0.1vw dashed #D19A4F; border-radius: 0.2vw;} #webringdesc{line-height: normal; font-weight:normal; padding:1ch; color:var(--black); margin:auto; text-align:center; max-width: 20ch;} #webringlinks {grid-area: link; height: 100%; width: 100%; box-sizing:border-box; padding: 0.5ch; padding-bottom: 1ch; line-height:normal; font-weight:normal; margin:auto; border:0.1vw dashed #D19A4F; border-radius: 0.25vw;} #linkparaWebring {color:var(--black); margin:auto; line-height: normal; text-align:center;} </style> <div id='templateWebring'> <img id='iconWebring' src='" + imgurlSelfWebring + "'/> <div id='webringdescbox'> <p id='webringdesc'> <strong>" + nameSelfWebring + "</strong> " + relationshipSelfWebring + " <strong>" + charnameSelfWebring + "</strong> from <strong>" + seriesSelfWebring + "</strong>. <br/> She's serious!</p> </div> <div id='webringlinks'> <p id='linkparaWebring'> <span class='my-font'>★┐♫┤</span> <a href='https://webring.koinuko.pink/members.php' target='_PARENT'>Members List</a> <span class='my-font'>┤♫┐★</span> <br/> Part of the <a href='https://webring.koinuko.pink/members.php' target='_PARENT'>Self-Insert Webring</a></p> </div> </div>";
             document.getElementById("selfinsertwebring").appendChild(templateWebring);