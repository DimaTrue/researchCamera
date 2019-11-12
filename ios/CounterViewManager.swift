//
//  CounterViewManager.swift
//  researchCamera
//
//  Created by Efimenko Dmitriy on 12.11.2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc (CounterViewManager)
class CounterViewManager: RCTViewManager {
  
  override func view() -> UIView! {
    return CounterView()
  }
  
//  override func view() -> UIView! {
//    let label = UILabel()
//    label.text = "Swift Counter"
//    label.textAlignment = .center
//    return label
//  }
  
  override static func requiresMainQueueSetup() -> Bool {
      return true
  }
  
  @objc func updateFromManager(_ node: NSNumber, count: NSNumber) {
    DispatchQueue.main.async {
      let component = self.bridge.uiManager.view(
        forReactTag: node
      ) as! CounterView
      
      component.update(value: count)
    }
  }
}
