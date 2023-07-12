import React from "react";
import { Grid, Image , Text} from "../elements";
import { info } from '../../reducers/board/RestauranrReducer'

interface RestaurantProps {
    rest_id: string;
    name?: string;
    adress?: string;
    view?: string;
    contents?:  string;
    create_at?: string;
    update_at?: string;
    latitud?: number;
    lonitude?: number;
    are_id?:  string;
    category_name?: string;
  }
  
const Restaurant: React.FC<RestaurantProps> = (props) => {
    const {rest_id, name, adress, view, contents, create_at, update_at,latitud,lonitude,are_id,category_name} = props;
    return(
        <div>
          <React.Fragment>
             <Grid 
                _onClick={(event) => info(rest_id)}
                margin="10px" height="506px">
                    <Image width="249px" height="320px" src={view}></Image>
                    <Text margin="12px 0px 0px 0px"size="16px">{name}</Text>
                    <Text padding="9px 0px 0px 0px" size="16px" weight="800">{adress}-{category_name}</Text>
                </Grid>
            </React.Fragment>
        </div>
    );
}

Restaurant.defaultProps = {
    name :"음식점 이름1",
    view : "https://i.pinimg.com/564x/bf/35/66/bf3566cd10c73edcfb61e041dbb434a1.jpg",
    adress:"서울시......",
    category_name:"2000"
}

export default Restaurant;




