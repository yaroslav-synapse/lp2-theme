<?php

namespace Drupal\adaptive;

/**
 * @file
 * Contains \Drupal\synapse\Controller\Page.
 */

/**
 * Company Info.
 */
class Company {

  /**
   * Info.
   */
  public static function info($attach) {
    $config = \Drupal::config('synapse.settings');
    $site_config = \Drupal::config('system.site');
    $company = [
      'name'   => ['#markup' => $site_config->get('name')],
      'slogan' => ['#markup' => $site_config->get('slogan')],
      'phone'  => $config->get('phone'),
      'email'  => $config->get('mail'),
      'contact' => str_replace("\n", "<br>", $config->get('contact')),
      'logo' => [
        '#theme' => 'image',
        '#uri' => theme_get_setting('logo.url'),
        '#alt' => 'Home',
      ],
      'map' => [
        'latitude'  => $config->get('map-latitude')?:39.868851844220124,
        'longitude' => $config->get('map-longitude')?:59.193704678739856,
        'zoom'      => $config->get('map-zoom')?:16,
        'name'      => $config->get('yamap-name')?:'Синапс',
        'attach'    => $attach,
        'offset_x'  => $config->get('map-offset_x'),
        'offset_y'  => $config->get('map-offset_y'),
      ],
    ];
    return $company;
  }

}
