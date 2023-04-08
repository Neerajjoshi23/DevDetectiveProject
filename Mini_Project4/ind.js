const modeText =document.querySelector('[mode-Selector]');
const modeImage=document.querySelector('[mode-image]');
const headerText=document.querySelector('.DevDetective');
const seachContainer=document.querySelector('.search-container');
const userInfoContainer=document.querySelector('.user-info-container');
const userName=document.querySelector('[userName]');
const userJoinedDate=document.querySelector('[userJoinedDate]');
const profileLink=document.querySelector('[profileLink]');
const bioDetails=document.querySelector('[bioDetails]');
const accountDetailsContainer=document.querySelector('.accountdetails-container');
const reposeDetails=document.querySelector('[reposeDetails]');
const followersDetails=document.querySelector('[followersDetails]');
const followingDetails=document.querySelector('[followingDetails]');
const reposedetails=document.querySelector('.reposedetails');
const followersdetails=document.querySelector('.followersdetails');
const followingdetails=document.querySelector('.followingdetails');
const infoText=document.querySelectorAll('.info');
const wrapper=document.querySelector('.wrapper');
const searchButton=document.querySelector('[search]');
const inputBar=document.querySelector('[input-bar]');
const userImage=document.querySelector('[userImage]');

fetchDetails("thepranaygupta");
let currMode=1;//black
function changeMode(){
   currMode=1-currMode;
   if(currMode==0){
          modeText.classList.add('light');
          modeText.textContent='Dark';
          modeImage.src="../Dev Detective Project/assets/images/moon-icon.svg";
          modeImage.classList.add('light');
          headerText.classList.add('light');
          seachContainer.classList.add('light');
          wrapper.classList.add('light');
          userInfoContainer.classList.add('light');
          userName.classList.add('light');
          userJoinedDate.classList.add('light');
          profileLink.classList.add('light');
          bioDetails.classList.add('light');
          accountDetailsContainer.classList.add('light');
          reposedetails.classList.add('light');
          followersdetails.classList.add('light');
          followingdetails.classList.add('light');
         for(let ele of infoText){
            ele.classList.add('light');
         }
          inputBar.style.setProperty("--c","#60ABFF");
          inputBar.classList.add('light');

   }
   else{
      modeText.classList.remove('light');
      modeText.textContent='Light';
      modeImage.src="../Dev Detective Project/assets/images/sun-icon.svg";
      modeImage.classList.remove('light');
      headerText.classList.remove('light');
      seachContainer.classList.remove('light');
      wrapper.classList.remove('light');
      userInfoContainer.classList.remove('light');
      userName.classList.remove('light');
      userJoinedDate.classList.remove('light');
      profileLink.classList.remove('light');
      bioDetails.classList.remove('light');
      accountDetailsContainer.classList.remove('light');
      reposedetails.classList.remove('light');
      followersdetails.classList.remove('light');
      followingdetails.classList.remove('light');
      for(let ele of infoText){
         ele.classList.remove('light');
      }
      inputBar.style.setProperty("--c","white");
      inputBar.classList.remove('light');

   }
}

modeImage.addEventListener('click',changeMode);
function renderDetails(data){
   userName.textContent=data?.login;
   let mon=[2,"jan", "Feb", "Mar" ,"Apr"," May", "Jun", "Jul", "Aug", "Sept", "Octo" ,"Nov", "Dec"];
   userJoinedDate.textContent=`
   Joined ${data?.created_at.substring(8,10)}
    ${mon[data?.created_at.substring(5,7)*1]} ${data?.created_at.substring(0,4)} `;
    
   profileLink.href=data?.url;
   profileLink.textContent=`@${data.login}`;
   bioDetails.textContent=(data?.bio===null)?" This Profile Has No Bio":data?.bio;
   reposeDetails.textContent=data?.public_repos;
   followersDetails.textContent=data?.followers;
   followingDetails.textContent=data?.following;

   const locationDetails=document.querySelector('[locationDetails]');
   if(data?.location===null){
      locationDetails.classList.add('hideSelectivity');
      locationDetails.textContent="Not Available";
   }
   else locationDetails.textContent=data?.location;

   const companyDetails=document.querySelector('[companyDetails]');
   if(data?.company===null){
      companyDetails.classList.add('hideSelectivity');
      companyDetails.textContent="Not Available";
   }
   else companyDetails.textContent=data?.company;

   const websiteDetails=document.querySelector('[websiteDetails ]');
   if(data?.blog===""){
      websiteDetails.classList.add('hideSelectivity');
      websiteDetails.textContent="Not Available";
   }
   else websiteDetails.textContent=data?.blog;

   const twitterDetails=document.querySelector('[twitterDetails]');

   if(data?.twitter_username===null){
      twitterDetails.classList.add('hideSelectivity');
      twitterDetails.textContent="Not Available";
   }
   else twitterDetails.textContent=data?.twitter_username;

  userImage.src=data?.avatar_url;
}
 async function fetchDetails(id){
  let reponse=await fetch(`https://api.github.com/users/${id}`);
  let data=await reponse.json();
  renderDetails(data);
}
searchButton.addEventListener('click',()=>{
   let id=inputBar.value;
   console.log(id);
   if(id==' ') return;
   fetchDetails(id);
});
