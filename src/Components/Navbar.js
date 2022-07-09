import React from 'react'
import {
    Link
  } from "react-router-dom";
import { Grid, GridItem, Text } from '@chakra-ui/react'

const Navbar =()=>{
    return <div>
        <Grid gap={4}>
            <GridItem colSpan={1} h='10' style={{textAlign:'left', padding:'15px'}}>
                <Link to="/"><Text fontSize="3xl" fontWeight="bold">Kaomoji ૮ ˶ᵔ ᵕ ᵔ˶ ა</Text></Link>
            </GridItem>
            {/* <GridItem colStart={5} colEnd={6} h='10' bg='papayawhip' /> */}
        </Grid>
    </div>
}

export default Navbar;