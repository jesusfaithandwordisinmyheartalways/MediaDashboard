


function Social() { 

    const iconClick = () => {
      const icon = document.getElementById('icon')
      const socialMediaText = document.getElementById('social-media-header');
      const followerText = document.getElementById('followers-header-text');
        
        document.body.classList.toggle('dark-theme');
        if(document.body.classList.contains('dark-theme')) {
            icon.src = "https://pngimg.com/uploads/sun/sun_PNG13429.png";
            socialMediaText.style.color = "white";
            followerText.style.color = "white";
            document.getElementById('overview-today').style.color = 'white';
        } else{
            icon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nm1QfnOALq01Kw6juBzZfC_UBDbocbrdjQ&s";
            socialMediaText.style.color = "black";
            followerText.style.color = "black";
            document.getElementById('overview-today').style.color = 'black';
        }
    } 


  return (
    <>
    <nav className="Nav-Container" id="nav-container">
        <div className="Nav-Wrapper">

                <div className="Social-Media-Header" id="social-media-header">Social Media Dashboard
                     <div className="Total-Followers-Header" id="followers-header-text">Total Followers: 1,198,980</div>
                </div>
                
            
                <div id="color-mode">Dark Mode
                <img onClick={iconClick} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nm1QfnOALq01Kw6juBzZfC_UBDbocbrdjQ&s" id="icon"></img>
                </div>
        </div>
     </nav>


            <div className="Content-Container">

                <div className="Content-Wrapper">

                <div className="content-wrapper content-wrapper-one">
                     <div className="youtube-wrapper">
                       <div className="youtube-image"><img src="https://cdn.pixabay.com/photo/2021/09/11/18/21/youtube-6616310_1280.png"></img></div>
                       <div className="youtube-text"><p>@amy</p></div>    
                     </div>
                     <div className="number-followers-wrapper">
                        <div className="number-followers-wrapper-text">225,000</div>
                     </div>
                     <div className="followers-wrapper">
                        <div className="followers-wrapper-text">Subscribers</div>
                     </div>
                     <div className="youtube-subscribers-wrapper">
                        <div className="youtube-subscribers-text"><span>&#94;</span> 9,000 Today</div>
                     </div>
                </div>

                <div className="content-wrapper content-wrapper-two">
                      <div className="twitter-wrapper">
                         <div className="twitter-image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHIZuDb--IJ-q5d97gWm1W2eyLj7BePcWnQ&s"></img></div>
                         <div className="twitter-text">@chad</div>
                      </div>
                      <div className="twitter-subscribers-wrapper">
                        <div className="twitter-subscribers-text">300,000</div>
                      </div>

                      <div className="twitter-followers-wrapper">
                        <div className="twitter-followers-text">Followers</div>
                      </div>

                      <div className="twitter-numbers-wrapper">
                        <div className="twitter-numbers-text"><span>&#94;</span> 12,000 Today</div>
                     </div>

                      

                </div>

                <div className="content-wrapper content-wrapper-three">
                    <div className="facebook-wrapper">
                        <div className="fb-image"><img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19750.png"></img></div>
                        <div className="fb-text">@gloria</div>
                    </div>

                    <div className="fb-followers-wrapper">
                        <div className="fb-followers-text">350,000</div>
                    </div>
                    <div className="fb-followers-text-wrapper">
                        <div className="fb-followers">Followers</div>
                    </div>
                    <div className="fb-numbers-wrapper">
                    <div className="fb-numbers-text"><span>&#94;</span> 18,000 Today</div>

                    </div>
                </div>

                <div className="content-wrapper content-wrapper-four">
                    <div className="instagram-wrapper">
                        <div className="instagram-image"><img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=996&t=st=1720282580~exp=1720283180~hmac=365f655fbf3e839644cd480ef1edd7ec021152e41c81a4d898dddc51619a4cd2"></img></div>
                        <div className="instagram-text">@tiffany</div>
                    </div>
                    <div className="instagram-followers-wrapper">
                        <div className="instagram-followers-text">323,980</div>
                    </div>
                    <div className="instagram-followers-text-wrapper">
                        <div className="instagram-followers">Followers</div>
                    </div>
                    <div className="instagram-numbers-wrapper">
                     <div className="instagram-numbers-text"><span>&#94;</span> 34,000 Today</div>
                    </div>
                </div>


                </div>

            </div>






     <div className="Content-Container-Two">

            <div className="Content-Wrapper-Two">
                <div className="content-wrapper-text" id="overview-today">Overview - Today</div>
            </div>
     </div>




     <div className="Content-Container-Three">

        <div className="Content-Wrapper-Three">

          <div className="overview-content-one overview-content">
                <div className="page-views-wrapper">
                    <div className="page-views-text">Total Views</div>
                    <div className="page-views-image"><img src="https://cdn.pixabay.com/photo/2021/09/11/18/21/youtube-6616310_1280.png"></img></div>
                </div>
                <div className="page-views-wrapper-two">
                    <div className="page-views-text-two">87</div>
                    <div className="page-views-numbers-text"><span>&#94;</span> 7%</div>
                </div>
          </div>

          <div className="overview-content-two overview-content">
             <div className="youtube-likes-wrapper">
                <div className="youtube-likes-text">Likes</div>
                <div className="youtube-likes-image"><img src="https://cdn.pixabay.com/photo/2021/09/11/18/21/youtube-6616310_1280.png"></img></div>
             </div>
             <div className="youtube-likes-wrapper-two">
                <div className="youtube-likes-text-two">909</div>
                <div className="youtube-likes-numbers-text"><span>&#94;</span> 15%</div>

             </div>
          </div>

          <div className="overview-content-three overview-content">
             <div className="fb-page-views-wrapper">
                <div className="fb-page-views-text">Page Views</div>
                <div className="fb-page-views-image"><img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19750.png"></img></div>
            </div>
            <div className="fb-page-views-wrapper-two">
            <div className="fb-page-views-text-two">110</div>
            <div className="fb-page-views-likes-numbers"><span>&#94;</span> 21%</div>

            </div>
          </div>

          <div className="overview-content-three  overview-content">
                <div className="fb-likes-wrapper">
                    <div className="fb-likes-text">Likes</div>
                    <div className="fb-likes-image"><img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19750.png"></img></div>
                </div>

                <div className="fb-likes-wrapper-two">
                    <div className="fb-likes-text-two">1008</div>
                    <div className="fb-likes-numbers"><span>&#94;</span> 4%</div>
                </div>
          </div>

          <div className="overview-content-four overview-content">
            <div className="twitter-retweet-wrapper">
                <div className="twitter-retweet-text">Retweets</div>
                <div className="twitter-retweet-image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHIZuDb--IJ-q5d97gWm1W2eyLj7BePcWnQ&s"></img></div>
            </div>
            <div className="twitter-retweet-wrapper-two">
              <div className="twitter-retweet-text-two">190</div>
              <div className="twitter-likes-numbers-two"><span>&#94;</span> 408%</div>
             </div>
          </div>

          <div className="overview-content-five overview-content">
            <div className="twitter-likes-wrapper">
                <div className="twitter-likes-header">Likes</div>
                <div className="twitter-likes-image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHIZuDb--IJ-q5d97gWm1W2eyLj7BePcWnQ&s"></img></div>
            </div>
            <div className="twitter-likes-wrapper-two">
                <div className="twitter-likes-text-two">708</div>
                <div className="twitter-numbers"><span>&#94;</span> 115%</div>
            </div>
          </div>

          <div className="overview-content-six overview-content">
                <div className="instagram-profile-wrapper">
                    <div className="instagram-profile-text">Profile Views</div>
                    <div className="instagram-profile-image"><img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=996&t=st=1720282580~exp=1720283180~hmac=365f655fbf3e839644cd480ef1edd7ec021152e41c81a4d898dddc51619a4cd2"></img></div>
                </div>
                <div className="instagram-profile-wrapper-two">
                    <div className="instagram-profile-text-two">419k</div>
                    <div className="instagram-numbers"><span>&#94;</span> 815%</div>
                </div>
          </div>

          <div className="overview-content-seven overview-content">
            <div className="instagram-likes-wrapper">
                <div className="instagram-likes-text">Likes</div>
                <div className="instagram-profile-image"><img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=996&t=st=1720282580~exp=1720283180~hmac=365f655fbf3e839644cd480ef1edd7ec021152e41c81a4d898dddc51619a4cd2"></img></div>
            </div>

            <div className="instagram-likes-wrapper-two">
            <div className="instagram-likes-wrapper-two-text">3,450,908</div>
            <div className="instagram-numbers-two"><span>&#94;</span> 815%</div>
            </div>


          </div>






        </div>



     </div>


    </>
    )

}







export default Social