// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Mission Control: All on F3, App on ⌘F3, Desktop on ⌥F3',
        rules: [
          {
            description: 'Mission Control: All Windows on F3',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'f3' },
                to: [{ shell_command: "/'System/Applications/Mission Control.app/Contents/MacOS/Mission Control' 0" }],
              },
            ],
          },
          {
            description: 'Mission Control: Application Windows on ⌘F3',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'f3', modifiers: { mandatory: ['left_gui'] } },
                to: [{ shell_command: "/'System/Applications/Mission Control.app/Contents/MacOS/Mission Control' 2" }],
              },
            ],
          },
          {
            description: 'Mission Control: Desktop on ⌥F3',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'f3', modifiers: { mandatory: ['left_alt'] } },
                to: [{ shell_command: "/'System/Applications/Mission Control.app/Contents/MacOS/Mission Control' 1" }],
              },
            ],
          },
        ],
      },
      null,
      '  '
    )
  )
}

main()
