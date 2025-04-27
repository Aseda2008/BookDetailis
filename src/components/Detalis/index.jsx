import React from 'react';
import { useParams } from 'react-router-dom';

const Detalis = ({id}) => {
    const {id} = useParams()
  return (
    <div id="detalis">
        <div class="cotainer">
            <div class="detalis">

            </div>
        </div>
    </div>
  );
};

export default Detalis;