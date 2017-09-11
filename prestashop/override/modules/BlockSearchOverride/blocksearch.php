<?php

class BlockSearchOverride extends BlockSearch {


    public function install() // Installation et amorçage du Hook
    {
        parent::install();
        $this->registerHook('displayLeftColumn');
        return true;
    }

    public function hookDisplayLeftColumn($params) {
        return $this->hookTop($params);
    }

}