<?php

function include_js($js, $mode='user'){
    if($mode == "system"){
        $src = "/public/js/".$js;
    }if($mode == "url"){
        $src = $js;
    }else{
        $src = "/_template/".domain."/include/js/".$js;
    }
    return '<script src="' . $src . '"></script>';
}

?>