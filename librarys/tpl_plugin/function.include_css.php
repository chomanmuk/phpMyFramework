<?php

function include_css($css='./', $mode = 'user')
{
    if($mode == "system"){
        $src = "/public/css/".$css;
    }else if($mode == "url"){
        $src = $css;
    }else{
        $src = "/_template/".domain."/include/css/".$css;
    }
    return '<link href="'.$src.'" rel="stylesheet">';
}
