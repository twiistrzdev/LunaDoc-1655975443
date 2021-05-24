export default function Command ({ name, desc, only, alia, args, exmp }) {
  return (
    <div>
        <h2><span class="subheading-anchor" id={ name }></span><a href={ `#` + name } class="text-current no-underline no-outline">{ name }<span class="anchor-icon" aria-hidden="true">#</span></a></h2>
        <p> { desc }</p>
        { only && <small>This command can only be executed on a server.</small> }
        <pre>
            Aliases : { alia && alia.join(" | ") }
            <br/>
            Usage   : £{ name } { args }
        </pre>
        <small style={{ position: 'relative', top: '-15px' }}><code>[]</code> = Required arguments — <code>{'{}'}</code> = Optional arguments.</small>
        <h3>How to use the command</h3>
        <pre>
            { exmp.map( exmp => <span>£{ name } {exmp + '\n'}</span> ) }
        </pre>
    </div>
    )
  }
