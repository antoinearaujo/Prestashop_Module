<?php

class MyModComments extends Module
{

    public function __construct() //Informations sur le module
    {
        $this->name = 'mymodcomments';
        $this->tab = 'front_office_features';
        $this->version = '0.0.1';
        $this->author = 'Antoine Araujo';
        $this->displayName = 'Module de commentaire produit';
        $this->description = 'Avec ce module, mes clients pourront commenter les produits et donner leurs avis';
        $this->bootstrap = true;


        parent:: __construct();

    }

    public function install() // Installation et amorçage du Hook
    {
        parent::install();

        // Activate every option by default
        Configuration::updateValue('MYMOD_GRADES', 1);
        Configuration::updateValue('MYMOD_COMMENTS', 1);

        $this->registerHook('displayProductTabContent');
        return true;
    }

    public function getContent() // Configuration du module (BackOffice)
    {
        $this->assignConfiguration();
        $this->processConfiguration();
        $html = '';

        if (Tools::isSubmit('submit' . $this->name)) {
            if (Validate::isUnsignedInt(Tools::getValue('MYMOD_GRADES')) && Validate::isUnsignedInt(Tools::getValue('MYMOD_COMMENTS'))) {
                Configuration::updateValue('MYMOD_GRADES', (int)(Tools::getValue('MYMOD_GRADES')));
                Configuration::updateValue('MYMOD_COMMENTS', (int)(Tools::getValue('MYMOD_COMMENTS')));

//                $this->_clearCache('blockpaymentlogo.tpl');
                $html .= $this->displayConfirmation($this->l('The settings have been updated.'));
            }
        }
        return $html . $this->renderForm();
    }

    public function renderForm() // Construction du formulaire (BackOffice)
    {
        $fields_form = array(
            'form' => array(
                'legend' => array(
                    'title' => $this->l('Settings'),
                    'icon' => 'icon-cogs'
                ),
                'input' => array(
                    array(
                        'type' => 'switch',
                        'label' => $this->l('Autoriser l\'affichage des avis'),
                        'desc' => $this->l(''),
                        'name' => 'MYMOD_GRADES',
                        'required' => true,
                        'class' => 't',
                        'is_bool' => true,
                        'values' => array(
                            array(
                                'id' => 'active_on',
                                'value' => 1,
                                'label' => $this->l('Enabled')
                            ),
                            array(
                                'id' => 'active_off',
                                'value' => 0,
                                'label' => $this->l('Disabled')
                            )
                        )
                    ),
                    array(
                        'type' => 'switch',
                        'label' => $this->l('Autoriser l\'écriture d\'un avis'),
                        'desc' => $this->l(''),
                        'name' => 'MYMOD_COMMENTS',
                        'required' => true,
                        'class' => 't',
                        'is_bool' => true,
                        'values' => array(
                            array(
                                'id' => 'active_on',
                                'value' => 1,
                                'label' => $this->l('Enabled')
                            ),
                            array(
                                'id' => 'active_off',
                                'value' => 0,
                                'label' => $this->l('Disabled')
                            )
                        )
                    )

                ),
                'submit' => array(
                    'title' => $this->l('Save'),
                )
            )
        );

        $helper = new HelperForm();
        $lang = new Language((int)Configuration::get('PS_LANG_DEFAULT'));
        $helper->default_form_language = $lang->id;
        $helper->allow_employee_form_lang = Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG') ? Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG') : 0;
        $helper->identifier = $this->identifier;
        $helper->submit_action = 'submit' . $this->name;
        $helper->currentIndex = $this->context->link->getAdminLink('AdminModules', false) . '&configure=' . $this->name . '&tab_module=' . $this->tab . '&module_name=' . $this->name;
        $helper->token = Tools::getAdminTokenLite('AdminModules');
        $helper->tpl_vars = array(
            'fields_value' => $this->getConfigFieldsValues(),
            'languages' => $this->context->controller->getLanguages(),
            'id_language' => $this->context->language->id
        );

        return $helper->generateForm(array($fields_form));
    }

    public function getConfigFieldsValues() // Sauvegarder la valeur enregistrée dans la configuration du module
    {
        return array(
            'MYMOD_GRADES' => Tools::getValue('MYMOD_GRADES', Configuration::get('MYMOD_GRADES')),
            'MYMOD_COMMENTS' => Tools::getValue('MYMOD_COMMENTS', Configuration::get('MYMOD_COMMENTS')),

        );
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

    public function assignProductTabContent() // Assignation des valeurs a des variables
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