<?php

namespace Drupal\adaptive;

/**
 * @file
 * Contains \Drupal\synapse\Controller\Page.
 */

/**
 * Company Info.
 */
class GetContactForm {

  /**
   * Form.
   */
  public static function form($form_name = 'callback', $count = 1) {
    $forms = [];
    for ($i = 0; $i < $count; $i++) {
      $key = $i + 1;
      $entity = \Drupal::entityManager()
        ->getStorage('contact_form')
        ->load($form_name);
      $message = \Drupal::entityManager()
        ->getStorage('contact_message')
        ->create(['contact_form' => $entity->id()]);
      $form = \Drupal::service('entity.form_builder')->getForm($message);
      $form['#prefix'] = '<div id="contact-form-' . $key . '">';
      $form['#suffix'] = '</div>';
      // B: $form['actions']['submit']['#value'] = $button;!
      $form['adaptive-hidden-form-key'] = [
        '#type' => 'hidden',
        '#value' => 'contact-form-' . $key,
        '#name' => 'element_id',
      ];
      $forms[$form_name . $key] = $form;
    }
    return $forms;
  }

}
