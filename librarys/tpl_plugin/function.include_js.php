<?php

function include_js($js, $mode='user'){
    print_r($mode);
    if($mode == "system"){
        $src = "/public/js/".$js;
    }else if($mode == "url"){
        $src = $js;
    }else{
        $src = "/_template/".domain."/include/js/".$js;
    }
    return '<script src="' . $src . '"></script>';
}

?>