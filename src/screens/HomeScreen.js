import { SafeAreaView } from "react-native";
import WelcomeComponent from "../Components/WelcomeComponent";
import HomeCarouselComponent from "../Components/HomeCarouselComponent";
import HomeHeadingComponent from "../Components/HomeHeadingComponent";


const HomeScreen = ()=>{
    return(
        <SafeAreaView>
        <WelcomeComponent/>
        <HomeCarouselComponent/>
        <HomeHeadingComponent/>
       </SafeAreaView>
    );
}

export default HomeScreen;