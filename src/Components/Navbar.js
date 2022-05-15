import React from 'react'
import { Grid, GridItem, Text } from '@chakra-ui/react'

const Navbar =()=>{
    return <div>
        <Grid gap={4}>
            <GridItem colSpan={1} h='10' style={{textAlign:'left', padding:'15px'}}>
                <Text fontSize="2xl" fontWeight="bold">Kaomoji ૮ ˶ᵔ ᵕ ᵔ˶ ა</Text>
            </GridItem>
            {/* <GridItem colStart={5} colEnd={6} h='10' bg='papayawhip' /> */}
        </Grid>
    </div>
}

export default Navbar;