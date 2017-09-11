<?php

class MyModComments extends Module
{

    public function __construct() //Informations sur le module
    {
        $this->name = 'mymodcomments';
        $this->tab = 'front_office_features';
        $this->version = '0.0.1';
        $this->author = 'Antoine Araujo';
        $this->displayName = 'Mon module de commentaire produit';
        $this->description = 'Avec ce module, mes clients pourront commenter les produits';
        $this->bootstrap = true;


        parent:: __construct();

    }

    public function install() // Installation et amorçage du Hook
    {
        parent::install();
        $this->registerHook('displayProductTabContent');
        return true;
    }

    public function getContent() // Configuration du module (BackOffice)
    {
        $this->assignConfiguration();
        $this->processConfiguration();
        return $this->display(__FILE__, 'getContent.tpl');
    }

    public function processConfiguration() // Recuperation des valeurs
    {
        if (Tools::isSubmit('submit_mymodcomments_form')) {
            $enable_grades = Tools::getValue('enable_grades');
            $enable_comments = Tools::getValue('enable_comments');
            Configuration::updateValue('MYMOD_GRADES', $enable_grades);
            Configuration::updateValue('MYMOD_COMMENTS', $enable_comments);
            $this->context->smarty->assign('confirmation', 'ok'); // Message de confirmation

        }
    }

    public function assignConfiguration() // Assignation des variables
    {

        $enable_grades = Configuration::get('MYMOD_GRADES');
        $enable_comments = Configuration::get('MYMOD_COMMENTS');
        $this->context->smarty->assign('enable_grades', $enable_grades);
        $this->context->smarty->assign('enable_comments', $enable_comments);

    }

    public function hookDisplayProductTabContent($params) // Hook Pour placer le module au bon endroit
    {
        $this->processProductTabContent();
        $this->assignProductTabContent();
        return $this->display(__FILE__, 'displayProductTabContent.tpl');
    }

    public function processProductTabContent()// Insertion commentaire du client dans la BDD
    {
        if (Tools::isSubmit('mymod_pc_submit_comment')) {
            $id_product = Tools::getValue('id_product');
            $grade = Tools::getValue('grade');
            $comment = Tools::getValue('comment');
            $insert = array(
                'id_product' => (int)$id_product,
                'grade' => (int)$grade,
                'comment' => pSQL($comment),
                'date_add' => date('Y-m-d H:i:s'),
            );
            Db::getInstance()->insert('mymod_comment', $insert);

        }
    }

    public function assignProductTabContent()
    {
        $enable_grades = Configuration::get('MYMOD_GRADES');
        $enable_comments = Configuration::get('MYMOD_COMMENTS');
        $id_product = Tools::getValue('id_product');
        $comments = Db::getInstance()->executeS('
        SELECT * FROM `' . _DB_PREFIX_ . 'mymod_comment`
        WHERE `id_product` = ' . (int)$id_product);

        $this->context->smarty->assign('enable_grades', $enable_grades);
        $this->context->smarty->assign('enable_comments', $enable_comments);
        $this->context->smarty->assign('comments', $comments);

    }


}