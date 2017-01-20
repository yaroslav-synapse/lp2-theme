<?php

namespace Drupal\adaptive;

/**
 * @file
 * Contains \Drupal\synapse\Controller\Page.
 */

/**
 * Prepare node_usluga.
 */
class NodeUsluga {

  /**
   * Info.
   */
  public static function prepare($node) {
    if ($node && is_object($node) && $node->getType() == 'usluga') {
      $usluga = [];

      // Usluga Blocks.
      $blocks = $node->field_usluga_blocks->getValue();
      foreach ($blocks as $key => $string) {
        $lines = explode("\n", $string['value']);
        $icon = 'fa fa-star';
        $head = '';
        if (isset($lines[0])) {
          $icon = trim($lines[0]);
          $icon = str_replace(':', "", $icon);
        }
        if (isset($lines[1])) {
          $head = trim($lines[1]);
        }
        unset($lines[0], $lines[1]);

        $usluga['blocks'][$key] = [
          'icon'  => $icon,
          'title' => $head,
          'text'  => ['#markup' => implode("<br />", $lines)],
        ];
      }
      return $usluga;
    }
    else {
      return FALSE;
    }

  }

}
