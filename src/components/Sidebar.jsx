import React from 'react'
import {Stack} from "@mui/material"
import  {categories } from "./utils/constants"
import { CallToAction, Category } from '@mui/icons-material'


const Sidebar = (props) =>(
  <Stack
  direction="row"
  sx ={{
    overflow : 'auto',
    height : {sx : 'auto', md : '95%'},
    flexDirection : {md : 'column'}
  }}
  >
    {categories.map((catagory)=>(
      <button
      onClick={()=> props.setSelectedCategory(catagory.name)}
      className='category-btn'
      style={{
        backgroundColor : catagory.name === props.selectedCategory && '#FC1503',
        color : "white"
      }}
      key = {catagory.name}
      >
          <span style={{color : catagory.name === props.selectedCategory ? 'white' : 'red',
        marginRight : '15px' }}>{catagory.icon}</span>
          <span style={{opacity : catagory.name===props.selectedCategory ? 1 : 0.8}}>{catagory.name}</span>
      </button>
    ))}
  </Stack>
)
export default Sidebar
