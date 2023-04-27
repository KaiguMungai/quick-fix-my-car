import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      username: 'Joseph',
      email: 'admin@example.com',
      password: bcrypt.hashSync('Kilgharrah'),
      isAdmin: true,
    },
    {
      username: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('0798992416'),
      isAdmin: false,
    },
  ],

  breakdowns: [
    {
      name: 'Flat Tyre',
      slug: 'flat tyre',
      image: '/images/flat-tyre.jpg',
      description: 'Change the Tyre',
      symptomslug: 'flat-tire symptoms',
      symptom1: 'Flapping or thumping noise: ',
      description1:
        'You may hear a flapping or thumping noise from the tire area as the flat tire slaps against the road surface.',
      symptom2: 'Difficulty in steering:',
      description2:
        'You may find it difficult to steer the car, especially when the flat tire is in the front.',
      symptom3: 'Uneven vehicle height:',
      description3:
        'The car may appear lower on one side than the other, indicating a flat tire on one side.',
      symptom4: 'Vibrations:',
      description4:
        'A flat tire can cause vibrations in the steering wheel, seat, or floorboards, especially at higher speeds.',
      symptom5: 'Tire pressure warning light:',
      description5:
        ' The Tire Pressure Monitoring System (TPMS) may display a warning light on the dashboard if there is low tire pressure or a flat tire',
      symptom6: 'Hissing sound from the tire',
      description6:
        'You may hear a hissing sound if the tire is punctured or damaged.',
      symptom7: 'Difficulty in accelerating: ',
      description7:
        'A flat tire can cause the car to struggle when accelerating, especially when the flat tire is on the driving axle.',
      repairslug: 'flat tyre repair',
      step1: 'Find a safe location:',
      step1details:
        'If you have a flat tire, pull over to a safe location off the road, away from traffic. Make sure the surface is level and stable.',
      step2: 'Turn off the engine and engage the parking brake:',
      step2details:
        'Turn off the engine and engage the parking brake to prevent the car from rolling.',
      step3: 'Loosen the lug nuts and raise the car',
      step3details:
        'Locate the spare tire and tools in the trunk or under the car. The tools usually include a lug wrench and a jack. Use the lug wrench to loosen the lug nuts on the flat tire, but do not remove them yet. Use the jack to raise the car until the flat tire is off the ground. Refer to your car-manual for the correct jack placement and lifting points.',
      step4: 'Remove the lug nuts and flat tire:',
      step4details:
        'Use the lug wrench to remove the lug nuts and take off the flat tire.',
      step5: 'Install the spare tire:',
      step5details:
        'Place the spare tire onto the wheel studs and hand tighten the lug nuts.',
      step6: 'Lower the car, Tighten the lug nuts and remove the jack:',
      step6details:
        'Use the jack to lower the car until the spare tire is only firmly touching the ground. Use the lug wrench to tighten the lug nuts in a star pattern until they are snug. Use the jack to lower the car completely and remove the jack.',
      step7: 'Check the tire pressure:',
      step7details:
        'Check the tire pressure of the spare tire and adjust it as needed.',
      step8: 'Replace the flat tire:',
      step8details:
        'Store the flat tire and tools in the trunk, and take the flat tire to a tire repair shop to be repaired or replaced.',
    },
    {
      name: 'Dead Battery',
      slug: 'dead battery',
      image: '/images/dead-battery.jpg',
      description: 'Jumpstart the Battery',
      symptom1: 'Engine cranks but does not start:',
      description1:
        'When you turn the key, you may hear the engine cranking, but it doesn not start. This is often a sign of a dead battery.',
      symptom2: 'No sound when turning the key:',
      description2:
        'If you turn the key and nothing happens, it may indicate that the battery is completely dead.',
      symptom3: 'Dim lights:',
      description3:
        'When the battery is dead or dying, the lights on the dashboard may appear dimmer than usual.',
      symptom4: 'Clicking sound:',
      description4:
        'You may hear a clicking sound when you turn the key, which is a sign that the battery doesn not have enough power to start the engine.',
      symptom5: 'Slow cranking:',
      description5:
        'If the engine cranks slowly, it could indicate a weak battery that is about to die.',
      symptom6: 'Electrical issues:',
      description6:
        'A dead battery can also cause electrical issues, such as problems with power windows or locks, or the radio not working.',
      symptom7: 'Smell of rotten eggs:',
      description7:
        'If you notice a smell of rotten eggs or sulfur around the battery, it may be leaking and needs to be replaced.',
      repairslug: 'dead battery repair',
      step1: 'Safety precautions:',
      step1details:
        'Before attempting to jump-start a battery, make sure you wear protective gloves and eyewear, and ensure that both cars are turned off.',
      step2: 'Position the vehicles:',
      step2details:
        'Position the car with the good battery next to the car with the dead battery, and make sure they are close enough for the jumper cables to reach between the batteries.',
      step3: 'Connect the jumper cables:',
      step3details:
        'Connect the red positive (+) cable to the positive terminal on the dead battery, then connect the other end of the red positive (+) cable to the positive terminal on the good battery. Next, connect the black negative (-) cable to the negative terminal on the good battery, and connect the other end of the black negative (-) cable to a metal part of the engine block or frame on the car with the dead battery.',
      step4: 'Start the engine:',
      step4details:
        'Start the engine of the car with the good battery and let it run for a few minutes.',
      step5: 'Attempt to start the other car:',
      step5details:
        'Attempt to start the engine of the car with the dead battery. If it doesn not start, wait a few more minutes and try again. If it still doesn not start, the battery may be completely dead and may need to be replaced.',
      step6: 'Remove the jumper cables:',
      step6details:
        'Once the car with the dead battery has started, remove the jumper cables in the reverse order that they were connected (black negative cable, red positive cable, black negative cable, red positive cable).',
      step7: 'Keep the car running: ',
      step7details:
        'Keep the car with the previously dead battery running for at least 15 minutes to allow the alternator to charge the battery.',
      step8: 'Check the battery:',
      step8details:
        'After the car has been running for a while, turn it off and try starting it again. If it starts without any issues, the battery may have been discharged and may need to be recharged, but if it does not start, the battery may be defective and may need to be replaced.',
    },
    {
      name: 'Overheated Engine',
      slug: 'overheated engine',
      image: '/images/overheated-engine.jpg',
      description: 'Stop! Cool the Engine',
      symptom1: 'Temperature gauge in the red zone:',
      description1:
        'The temperature gauge on the dashboard will show the engine temperature. If it reaches the red zone, it is an indication that the engine is overheating.',
      symptom2: 'Steam coming from the engine:',
      description2:
        'When the engine overheats, it can cause steam to come out from under the hood.',
      symptom3: 'Burning smell:',
      description3:
        'An overheating engine can produce a burning smell, which can indicate that the engine components are overheating and melting.',
      symptom4: 'Engine warning light:',
      description4:
        'Many modern cars have a warning light on the dashboard that will illuminate if the engine is overheating.',
      symptom5: 'Loss of power:',
      description5:
        'When the engine overheats, it can cause a loss of power and the car may struggle to accelerate.',
      symptom6: 'Odd noises:',
      description6:
        'An overheating engine can produce odd noises such as clunking, knocking, or pinging sounds.',
      symptom7: 'Coolant leaking:',
      description7:
        'If the engine is overheating, it may cause the coolant to leak from the engine or radiator.',
      repairslug: 'overheated engine repair',
      step1: 'Pull over safely: ',
      step1details:
        'If you notice that your engine is overheating, pull over to a safe location as soon as possible. Turn off the engine and allow it to cool down for at least 30 minutes before attempting any repairs.',
      step2: 'Check the coolant level:',
      step2details:
        'Once the engine has cooled down, check the coolant level in the radiator and overflow tank. If the coolant level is low, add more coolant until it reaches the appropriate level. Be careful not to overfill the radiator.',
      step3: 'Check for leaks:',
      step3details:
        'Check the engine and radiator for any leaks that may be causing the coolant to escape. Look for any signs of coolant dripping or spraying from hoses, the radiator, or the engine block. If you find a leak, replace or repair the damaged component.',
      step4: 'Check the thermostat:',
      step4details:
        'The thermostat is responsible for regulating the engine temperature. If it is not functioning properly, the engine may overheat. Check the thermostat to ensure it is opening and closing properly. If it is not working, replace it.',
      step5: 'Check the radiator fan:',
      step5details:
        ' The radiator fan helps to cool the engine by drawing air over the radiator. If the fan is not working, the engine may overheat. Check the fan motor and fan blades to make sure they are functioning properly. If necessary, replace the fan motor or fan assembly.',
      step6: 'Check the water pump:',
      step6details:
        'The water pump is responsible for circulating the coolant throughout the engine. If it is not working, the coolant may not be able to flow properly, leading to an overheated engine. Check the water pump for any signs of damage or wear. If necessary, replace the water pump.',
      step7: 'Restart the engine and monitor the temperature:',
      step7details: 'Once you have completed the repairs, start the engine.',
      step8: 'Monitor the Temperature Gauge',
      step8details:
        'Make sure the temperature stays within the normal range. If it starts to rise again, pull over and check for any additional problems.',
    },
    {
      name: 'Worn-Out Spark Plugs',
      slug: 'worn-out spark plugs',
      image: '/images/faulty-spark-plugs.jpg',
      description: 'Replace the Spark Plugs',
      symptom1: 'Poor acceleration:',
      description1:
        'Worn-out spark plugs can cause a decrease in engine power, leading to sluggish acceleration.',
      symptom2: 'Rough idling:',
      description2:
        'If the engine is idling roughly or shaking, it may be a sign of worn-out spark plugs.',
      symptom3: 'Misfiring:',
      description3:
        'Misfiring occurs when one or more cylinders in the engine fail to ignite. Worn-out spark plugs can cause misfiring, which can cause the engine to run rough and decrease fuel efficiency.',
      symptom4: 'Difficulty starting:',
      description4:
        'If the engine is having difficulty starting, especially in colder weather, it could be a sign of worn-out spark plugs.',
      symptom5: 'Decreased fuel efficiency:',
      description5:
        'Worn-out spark plugs can cause the engine to work harder, decreasing fuel efficiency and increasing emissions.',
      symptom6: 'Engine surging:',
      description6:
        'If the engine is surging or bucking at high speeds, it may be a sign of worn-out spark plugs.',
      symptom7: 'Increased exhaust emissions:',
      description7:
        'Worn-out spark plugs can cause an increase in exhaust emissions, which can lead to failed emissions tests.',
      repairslug: 'worn-out spark plugs repair',
      step1: 'Gather the tools:',
      step1details:
        'You will need a spark plug socket, a ratchet or wrench, and a spark plug gap gauge.',
      step2: 'Locate the spark plug:',
      step2details:
        'Open the hood of your car and locate the spark plug. The spark plugs are usually located on the engine block and are connected to thick, insulated wires.',
      step3: 'Remove the old spark plug:',
      step3details:
        'Use the spark plug socket and ratchet or wrench to loosen the old spark plug by turning it counter-clockwise. Once the spark plug is loose, remove it by hand.',
      step4: 'Check the spark plug gap: ',
      step4details:
        'Use the spark plug gap gauge to check the gap between the electrodes at the tip of the new spark plug. Adjust the gap using the gauge if needed to match the manufacturer specifications.',
      step5: 'Install the new spark plug:',
      step5details:
        'Insert the new spark plug into the socket and thread it by hand into the hole where the old spark plug was located. Use the spark plug socket and ratchet or wrench to tighten the new spark plug by turning it clockwise until it is snug.',
      step6: 'Reconnect the spark plug wire:',
      step6details:
        'Reconnect the spark plug wire to the new spark plug by pressing it firmly onto the metal tip until it clicks into place.',
      step7: 'Repeat for other spark plugs:',
      step7details:
        'Repeat the above steps for the other spark plugs, if needed.',
      step8: 'Test the engine:',
      step8details:
        'Start the engine and listen for any unusual sounds. If the engine is running smoothly, the spark plug replacement is complete.',
    },
    {
      name: 'Broken Taillight/Headlight',
      slug: 'broken taillight',
      image: '/images/broken-taillight.jpg',
      description: 'Replace the Bulbs',
      symptom1: 'Reduced visibility:',
      description1:
        'If a headlight or taillight is broken, it can reduce the  visibility ofthe driver, especially at night or in low light conditions.',
      symptom2: 'Reduced safety:',
      description2:
        'Broken taillights can make it difficult for other drivers to see the position and movements of your car, increasing the risk of accidents.',
      symptom3: 'Traffic violations:',
      description3:
        'Driving with a broken headlight or taillight can result in traffic violations, such as a ticket or fine.',
      symptom4: 'Bulb failure warning:',
      description4:
        'Many cars have a warning light on the dashboard that will illuminate if there is a problem with a headlight or taillight bulb.',
      symptom5: 'Moisture inside the light assembly:',
      description5:
        'A broken taillight or headlight can allow moisture to enter the light assembly, which can cause fogging or condensation inside the lens.',
      symptom6: 'Cracked or broken lens: ',
      description6:
        'A cracked or broken lens on a taillight or headlight can allow dirt, debris, and moisture to enter the light assembly, reducing the effectiveness of the light.',
      symptom7: 'Electrical problems:',
      description7:
        'A broken taillight or headlight can also cause electrical problems, such as a blown fuse or a short circuit.',
      repairslug: 'broken taillight repair',
      step1: 'Safety Precautions',
      step1details:
        'Turn off the Car engine and remove the key from ignition. The electrical system of the car connects all electrics and electronics with the battery. Turning off and removing the key from ignition disconnects all electronics and electrics of the car.',
      step2: 'Purchase a replacement taillight:',
      step2details:
        ' Before beginning the repair, make sure to purchase a replacement taillight that is compatible with the make and model of your car.',
      step3: 'Locate the broken taillight:',
      step3details:
        'Identify the location of the broken taillight. Depending on the make and model of your vehicle, it may be necessary to remove the taillight assembly to replace the broken part.',
      step4: 'Remove the broken taillight:',
      step4details:
        'Depending on how the taillight is secured, you may need to use a screwdriver or socket wrench to remove any screws or bolts holding the taillight in place. Be careful not to damage any wires or connections when removing the taillight.',
      step5: 'Disconnect the wiring harness:',
      step5details:
        'Once the taillight is removed, disconnect the wiring harness by gently pulling it away from the taillight. Be sure to note the orientation of the wires so you can reconnect them properly.',
      step6: 'Install the new taillight:',
      step6details:
        'Carefully install the replacement taillight by connecting the wiring harness and securing it in place with any screws or bolts that were removed.',
      step7: 'Test the taillight: ',
      step7details:
        'Turn on your the headlights of your car and test the new taillight to make sure it is working properly. If it is not functioning correctly, double-check the wiring connections and ensure the taillight is properly secured.',
      step8: 'Reassemble the taillight assembly:',
      step8details:
        'If you had to remove the entire taillight assembly, make sure to reattach it properly to the vehicle.',
    },
    {
      name: 'Worn-Out Wipers',
      slug: 'worn-out wipers',
      image: '/images/faulty-wipers.jpg',
      description: 'Replace the Wipers',
      symptom1: 'Streaks on the windshield: ',
      description1:
        'If the wipers are leaving streaks on the windshield, it may be a sign that the wiper blades are worn out or damaged.',
      symptom2: 'Chattering or skipping:',
      description2:
        'When the wiper blades are worn out, they may chatter or skip across the windshield instead of gliding smoothly.',
      symptom3: 'Smearing:',
      description3:
        'Worn-out wipers can cause smearing on the windshield, making it difficult to see clearly in rainy or snowy weather.',
      symptom4: 'Uneven wiping:',
      description4:
        'If the wipers are leaving areas of the windshield untouched or not wiping evenly, it could be a sign that the wiper blades are worn out or damaged.',
      symptom5: 'Squeaking or squealing:',
      description5:
        'Worn-out wipers can make a squeaking or squealing noise when in use.',
      symptom6: 'Stiff or bent wiper blades:',
      description6:
        'If the wiper blades are stiff or bent, they may not conform to the shape of the windshield, leading to poor performance.',
      symptom7: 'Worn or damaged rubber:',
      description7:
        'Over time, the rubber on the wiper blades can wear down or become damaged, leading to decreased wiping effectiveness.',
      repairslug: 'worn-out wipers repair',
      step1: 'Safety Precautions',
      step1details:
        'Turn off the Car engine and remove the key from ignition. Make sure the wipers are set to the off position',
      step2: 'Check the condition of the wiper blades:',
      step2details:
        ' Inspect the wiper blades for any cracks, tears, or signs of wear. If they are severely damaged, they may need to be replaced instead of repaired.',
      step3: 'Clean the wiper blades:',
      step3details:
        'Use a clean cloth and some warm, soapy water to clean the wiper blades. This can help remove any dirt or debris that may be causing the blades to skip or streak.',
      step4: 'Check the wiper arm tension:',
      step4details:
        'Check the tension of the wiper arm to ensure that it is securely holding the wiper blade against the windshield. If the arm is loose, tighten the nut or bolt that secures it to the wiper motor.',
      step5: 'Adjust the wiper arm angle:',
      step5details:
        'If the wiper blade is not making full contact with the windshield, adjust the angle of the wiper arm so that it is more perpendicular to the glass.',
      step6: 'Replace the wiper blades:',
      step6details:
        'If the wiper blades are worn or damaged beyond repair, they will need to be replaced. Purchase new wiper blades that are compatible with the make and model of your car, and follow the manufacturer`s instructions for installation.',
      step7: 'Test the wipers:',
      step7details:
        'Turn on the wipers and test them to ensure that they are functioning properly. Make sure they are wiping cleanly and evenly across the windshield.',
      step8: 'Check the spray nozzle of the wipers',
      step8details:
        'While testing the wipers if the nozzles are spray water in wrongly or fail to spray,you can get a sharp needle or toothpick and clean the nozzle while the car is off and wipers are off. Then you can test the wipers again',
    },
  ],
};

export default data;
