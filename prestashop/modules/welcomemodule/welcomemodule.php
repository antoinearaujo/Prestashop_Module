<?php

class WelcomeModule extends Module
{

    public function __construct() //Informations sur le module
    {
        $this->name = 'welcomemodule';
        $this->tab = 'front_office_features';
        $this->version = '0.0.1';
        $this->author = 'Antoine Araujo';
        $this->displayName = 'Module de bienvenue';
        $this->description = 'Avec ce module, mes clients pourront choisir un message de bienvenue';
        $this->bootstrap = true;


        parent:: __construct();

    }

    public function install() // Installation et amorçage du Hook
    {
        parent::install();

        // Activate every option by default
        Configuration::updateValue('WM_MOD_BOOL', 1);
        Configuration::updateValue('WM_MOD_MSG', 'Entrez votre message ici');

        $this->registerHook('displayNav');
        return true;
    }

    public function getContent() // Configuration du module (BackOffice)
    {
        $this->assignConfiguration();
        $this->processConfiguration();
        $html = '';

        if (Tools::isSubmit('submit' . $this->name)) {
            if (Validate::isUnsignedInt(Tools::getValue('WM_MOD_BOOL')) && Validate::isMessage(Tools::getValue('WM_MOD_MSG'))) {
                Configuration::updateValue('WM_MOD_BOOL', (int)(Tools::getValue('WM_MOD_BOOL')));
                Configuration::updateValue('WM_MOD_MSG', (string)(Tools::getValue('WM_MOD_MSG')));

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
                        'label' => $this->l('Bienvenue'),
                        'desc' => $this->l(''),     // description
                        'hint' => $this->l('Autoriser l`affichage d`un message de bienvenue'),     //description on scroll
                        'desc' => $this->l(''),
                        'name' => 'WM_MOD_BOOL',
                        'required' => true,
                        'values' => array(
                            array(
                                'value' => 1,
                                'label' => $this->l('Enabled')
                            ),
                            array(
                                'value' => 0,
                                'label' => $this->l('Disabled')
                            )
                        )
                    ),

                    array(
                        'type' => 'textarea',
                        'label' => $this->l('Message'),
                        'name' => 'WM_MOD_MSG',
                        'class' => 'lg',
                        'required' => true,
                        'desc' => $this->l('Entrez un message de bienvenue'),
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
            'WM_MOD_BOOL' => Tools::getValue('WM_MOD_BOOL', Configuration::get('WM_MOD_BOOL')),
            'WM_MOD_MSG' => Tools::getValue('WM_MOD_MSG', Configuration::get('WM_MOD_MSG')),

        );
    }


    public function processConfiguration() // Recuperation des valeurs
    {
        if (Tools::isSubmit('submit_mymodwelcome_form')) {
            $enable_bool = Tools::getValue('enable_bool');
            $enable_msg = Tools::getValue('enable_msg');

            Configuration::updateValue('WM_MOD_BOOL', $enable_bool);
            Configuration::updateValue('WM_MOD_MSG', $enable_msg);

            $this->context->smarty->assign('confirmation', 'ok'); // Message de confirmation

        }
    }

    public function assignConfiguration() // Assignation des variables
    {

        $enable_bool = Configuration::get('WM_MOD_BOOL');
        $enable_msg = Configuration::get('WM_MOD_MSG');


        $this->context->smarty->assign(array(
            'enable_bool' => $enable_bool,
            'enable_msg' => $enable_msg,

        ));

    }

    public function hookDisplayNav($params) // Hook Pour placer le module au bon endroit
    {

        $this->assignConfiguration();
        return $this->display(__FILE__, 'displayNav.tpl');
    }


    /*public function assignProductTabContent() // Assignation des valeurs a des variables
    {
        $enable_bool = Configuration::get('WM_MOD_BOOL');
        $enable_msg = Configuration::get('WM_MOD_MSG');

        $this->context->smarty->assign(array(
                'enable_bool' => $enable_bool,
                'enable_msg' => $enable_msg)
        );


    }*/

}